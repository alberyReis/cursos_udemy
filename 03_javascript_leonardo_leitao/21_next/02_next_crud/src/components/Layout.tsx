import Titulo from "./Titulo";

interface LayoutProps {
  titulo: string
  children: any
}

export default function Layout({ titulo, children }: LayoutProps) {
  return (
    <div className="flex flex-col w-2/3 bg-white text-gray-800 rounded-md">
      <div>
        <Titulo>{titulo}</Titulo>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}