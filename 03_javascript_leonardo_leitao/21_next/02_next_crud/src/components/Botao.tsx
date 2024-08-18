interface BotaoProps {
  cor?: 'green' | 'blue' | 'gray'
  className?: string
  children: any
  onClick?: () => void
}

export default function Botao({ cor, className, children, onClick }: BotaoProps) {
  const corBotao = cor ?? 'gray'
  const botaoFrom = `from-${corBotao}-400`
  const botaoTo = `to-${corBotao}-700`

  return (
    <button 
    onClick={onClick}
    className={`
      bg-gradient-to-tr 
      ${botaoFrom}
      ${botaoTo}
      text-white 
      px-4 
      py-2 
      rounded-md
      ${className}
    `}>
      {children}
    </button>
  )
}