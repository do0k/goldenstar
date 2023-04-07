const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white shadow-lg shadow-[#a1acb826] rounded-lg p-3">
      {children}
    </div>
  )
}

export default Card