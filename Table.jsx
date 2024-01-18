import { Head } from '@inertiajs/react';

export default function Table({ items, columns, primary, action }) {
    return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                               {primary}
                            </th>
                            {columns.map((column) =>
                                <th key={column} scope="col" className="px-6 py-3">
                                {column}
                                </th>
                            )}
                            <th scope="col" className="px-6 py-3">

                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) =>
                        <tr key={item.id} className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                #{item.id}
                            </th>
                            {columns.map((column) =>
                                <td key={column} className="px-6 py-4">
                                {item[column]}
                                </td>
                            )}

                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                <a href={route(action,item.id)} className='font-medium text-blue-600'>View Details</a>
                            </td>

                        </tr>
                         )}

                    </tbody>
                </table>
            </div>

    );
}
