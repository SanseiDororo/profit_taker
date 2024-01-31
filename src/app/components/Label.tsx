function Label(props: React.HtmlHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className="text-[hsl(186,14%,43%)] text-sm font-semibold"
    ></label>
  )
}

export default Label
