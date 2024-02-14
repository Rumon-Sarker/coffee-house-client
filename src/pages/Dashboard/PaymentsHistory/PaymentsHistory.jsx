import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hocks/useAuth";
import useAxionSecure from "../../../hocks/useAxionSecure";

const PaymentsHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxionSecure();
    const { data: paymentsHistory = [] } = useQuery({
        queryKey: ["payments", user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }

    })

    return (
        <div className="p-4">
            <div className="flex justify-evenly">
                <h1 className="text-2xl">Total Payments History: <span className="font-bold">0{paymentsHistory.length}</span></h1>
            </div>
            <div className="overflow-x-auto mt-5 ">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className="font-bold bg-gray-100 text-lg">
                            <th>
                                #
                            </th>

                            <th>Email</th>
                            <th>Price</th>
                            <th>TaransitionId</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentsHistory.map((users, index) => <tr key={index}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>

                            <td>{users.email}</td>
                            <td>
                                $ {users.price}
                            </td>
                            <td>
                                {users.taransitionId}
                            </td>
                            <td>
                                {users.date}
                            </td>


                        </tr>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PaymentsHistory;