import React from 'react';
import type { Forklift } from '../types/fortlift';
import { formatManufacturingDate } from '../utilities/format-date';

interface Props {
  forklifts: Forklift[];
}



const ForkliftTable: React.FC<Props> = ({ forklifts }) => (
  <div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
      <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model Number</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manufacturing Date</th>
      </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
      {forklifts.map((forklift) => (
          <tr key={forklift.id} className="hover:bg-gray-50 transition-colors duration-150">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{forklift.name}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{forklift.modelNumber}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatManufacturingDate(forklift.manufacturingDate)}</td>
          </tr>
      ))}
      </tbody>
  </table>
</div>
  
);

export default ForkliftTable;
