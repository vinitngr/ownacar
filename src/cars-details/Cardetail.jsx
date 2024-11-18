import Header from "@/components/Header"
function Cardetail() {
  return (
    <div>
        <Header/>
        <div className="grid grid-cols-[300px_400px_1fr] gap-4">
  <div className="bg-gray-200">300px wide column</div>
  <div className="bg-gray-300">400px wide column</div>
  <div className="bg-gray-400">Auto-fill remaining space</div>
</div>
<div className="grid grid-cols-[300px,1fr] gap-4">
  <div className="bg-blue-300">Content for 2/3 width</div>
  <div className="bg-red-300">Content for 1/3 width</div>
</div>
    </div>
  )
}

export default Cardetail