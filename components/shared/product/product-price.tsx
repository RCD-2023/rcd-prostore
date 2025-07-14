import { cn } from '@/lib/utils';

type Props = {
  value: number;
  className?: string;
};
const ProductPrice = ({ value, className }: Props) => {
  // Ensures two decimal places
  const stringValue = value.toFixed(2);
  // Split into integer and decimal parts
  const [intValue, floatValue] = stringValue.split('.');

  return (
    <p className={cn('text-2xl', className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
