interface NumberedPillarProps {
  number: string;
  title: string;
  body: string;
}

export const NumberedPillar = ({ number, title, body }: NumberedPillarProps) => (
  <div className="space-y-6">
    <span className="font-headline text-4xl text-outline-variant">{number}</span>
    <h4 className="font-label text-sm tracking-widest uppercase font-medium">{title}</h4>
    <p className="font-body text-on-surface-variant text-sm leading-relaxed">{body}</p>
  </div>
);
