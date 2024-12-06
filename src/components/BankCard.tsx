import { BankCard as BankCardType } from '../types/subscription';

interface BankCardProps {
  card: BankCardType;
}

export function BankCard({ card }: BankCardProps) {
  const formatNumber = (num: string) => num.match(/.{1,4}/g)?.join(' ') || num;
  
  return (
    <div className="bg-black/90 p-4 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <span className="text-white font-medium">{card.bank}</span>
        <img 
          src={card.type === 'visa' 
            ? 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
            : 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'
          } 
          alt={card.type}
          className="h-6 object-contain"
        />
      </div>
      
      <div className="text-xl text-white font-mono tracking-wider">
        {formatNumber(card.number)}
      </div>
    </div>
  );
}