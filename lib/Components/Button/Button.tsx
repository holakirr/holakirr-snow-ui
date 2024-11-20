interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: ButtonProps) => (
	<button className='bg-red-300' {...props}>
		{children}
	</button>
)
