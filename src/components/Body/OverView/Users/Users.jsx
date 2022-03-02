import TotalUsers from './totalUsers/totalUsers'
import TotalSellers from './totalSellers/totalSellers'
import TotalCustomers from './totalCustomers/totalCustomers'
import AllUser from './allUser/allUser'
import AllSellers from './allSellers/allSellers'
import AllCustomers from './allCustomers/allCustomers'

function Users(){
    return(
        <div className="main-api">
            <div className ="card">
                <TotalUsers/>
                <TotalSellers/>
                <TotalCustomers/>
            </div>
            <div className="list">
                <div className="items">
                    < AllUser/>
                </div>
                <div className="items">
                    < AllSellers/>
                </div>
                <div className="items">
               < AllCustomers/>
               </div>
            </div>
        </div>
    )
}

export default Users