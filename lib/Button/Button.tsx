type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => (
	<button className="bg-red-700" {...props}>
		{children}
	</button>
);

Button.displayName = "Button";
export { Button };
