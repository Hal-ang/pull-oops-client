import { STEPS_DATA } from '../demo/main';
import StepCard from '../components/main/StepCard';
import { StepCardType } from '../types/main';
import StepHeader from '../components/main/StepHeader';
import { useMemo } from 'react';

const Main = () => {
  const steps = useMemo(() => STEPS_DATA.data.Step as StepCardType[], []);

  return (
    <div className='h-screen w-full'>
      <StepHeader steps={steps.map((step) => step.id)} isShowShadow />
      <div className='w-full px-6 h-full overflow-y-scroll snap-y pt-10'>
        {steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </div>
    </div>
  );
};

export default Main;
