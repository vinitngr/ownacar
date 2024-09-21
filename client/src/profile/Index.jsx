import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
function Index() {
  return (
    <div>
        <Header/>
        <div className="p-10">
            <div className="flex justify-between">
                <div className="text-3xl googlehandfont font-bold">My Listing</div>
                <Link to={'/addListing'}>
                <Button className="bg-blue-600 googlehandfont rounded-full text-white hover:text-black ">+Add New Listing</Button>
                </Link> 
                </div>
        </div>
    </div>
  )
}

export default Index