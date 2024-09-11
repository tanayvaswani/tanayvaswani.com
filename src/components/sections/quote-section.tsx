const QuoteComponent = ({ quote }: { quote: string }) => {
  return (
    <div className="pl-2 py-1 border-l-4 border-neutral-700">
      <blockquote className="italic font-light text-neutral-800">
        <p>&quot;{quote}&quot;</p>
      </blockquote>
    </div>
  );
};

export default QuoteComponent;
