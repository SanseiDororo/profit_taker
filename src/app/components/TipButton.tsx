function TipButton(props: React.HtmlHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="text-white font-semibold bg-very-dark-cyan pt-2 pb-2 rounded-sm hover:bg-strong-cyan"
    />
  )
}
export default TipButton
