import React from 'react';

interface IFeatureCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  wrapperClass?: string;
  iconClass?: string;
};

const FeatureCard: React.FC<IFeatureCardProps> = ({
  title,
  description,
  Icon,
  wrapperClass = '',
  iconClass = '',
}) => {
  return (
    <div className={wrapperClass}>
      <div className='mb-6'>
        <Icon className={iconClass} />
      </div>
      <h4 className='text-xl font-bold mb-4 text-foreground'>{title}</h4>
      <p className='text-muted-foreground leading-relaxed'>{description}</p>
    </div>
  );
};

export default FeatureCard;
