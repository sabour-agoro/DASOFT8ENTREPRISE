import React, { useState, Children, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; 

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  backButtonText = 'Précédent',
  nextButtonText = 'Suivant',
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <div className="flex flex-col w-full items-center" {...rest}>
      {/* Step Indicators */}
      <div className="flex w-full items-center mb-10 px-2 justify-center">
        {stepsArray.map((_, index) => {
          const stepNumber = index + 1;
          const isNotLastStep = index < totalSteps - 1;
          return (
            <React.Fragment key={stepNumber}>
              <StepIndicator
                step={stepNumber}
                currentStep={currentStep}
                onClickStep={(clicked) => {
                  setDirection(clicked > currentStep ? 1 : -1);
                  updateStep(clicked);
                }}
              />
              {isNotLastStep && <StepConnector isComplete={currentStep > stepNumber} />}
            </React.Fragment>
          );
        })}
      </div>

      {/* Content Area */}
      <StepContentWrapper
        isCompleted={isCompleted}
        currentStep={currentStep}
        direction={direction}
        className="w-full flex items-center justify-center flex-col"
      >
        {stepsArray[currentStep - 1]}
      </StepContentWrapper>

      {/* Footer Buttons */}
      {!isCompleted && (
        <div className={`mt-14 flex ${currentStep !== 1 ? 'justify-between' : 'justify-end'} w-full`}>
          {currentStep !== 1 && (
            <button
              onClick={handleBack}
              className="text-[11px] uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors font-black"
            >
              {backButtonText}
            </button>
          )}
          <button
            onClick={isLastStep ? handleComplete : handleNext}
            className="flex items-center justify-center bg-white hover:bg-neutral-100 text-black font-black uppercase text-[11px] tracking-[0.3em] px-12 py-4.5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
          >
        
            {isLastStep ? 'Lancer le projet' : nextButtonText}
          </button>
        </div>
      )}
    </div>
  );
}

function StepContentWrapper({ isCompleted, currentStep, direction, children, className = '' }) {
  const [parentHeight, setParentHeight] = useState(0);
  return (
    <motion.div
      style={{ position: 'relative', overflow: 'visible' }} 
      animate={{ height: isCompleted ? 0 : parentHeight }}
      className={`w-full ${className}`}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition key={currentStep} direction={direction} onHeightReady={(h) => setParentHeight(h)}>
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SlideTransition({ children, direction, onHeightReady }) {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
  }, [children, onHeightReady]);

  const stepVariants = {
    enter: (dir) => ({ x: dir >= 0 ? '15px' : '-15px', opacity: 0 }),
    center: { x: '0px', opacity: 1 },
    exit: (dir) => ({ x: dir >= 0 ? '-15px' : '10px', opacity: 0 })
  };

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      style={{ position: 'relative', width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

export function Step({ children }) {
  return <div className="w-full flex items-center justify-center flex-col">{children}</div>;
}

function StepIndicator({ step, currentStep, onClickStep }) {
  const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete';
  return (
    <motion.div 
      onClick={() => onClickStep(step)}
      className="relative cursor-pointer"
      animate={status}
    >
      <motion.div
        variants={{
          inactive: { backgroundColor: '#222', color: '#666', scale: 1 },
          active: { backgroundColor: '#FFF', color: '#000', scale: 1.05 },
          complete: { backgroundColor: '#FFF', color: '#000', scale: 1 }
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="flex h-9 w-9 items-center justify-center rounded-full font-bold text-xs"
      >
        {status === 'complete' ? '✓' : step}
      </motion.div>
    </motion.div>
  );
}

function StepConnector({ isComplete }) {
  return (
    <div className="relative mx-3 h-[1px] flex-1 bg-white/10 w-24">
      <motion.div
        className="absolute left-0 top-0 h-full bg-white"
        initial={{ width: 0 }}
        animate={{ width: isComplete ? '100%' : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </div>
  );
}