import { TPass } from "@/types";

interface TableProps {
  data: TPass[];
}

export default function Table({ data }: TableProps) {
  return (
    <table className="min-w-full bg-white text-sm">
      <thead className="text-left">
        <tr>
          <th className="py-2 px-4 border-b border-slate-300">ID</th>
          <th className="py-2 px-4 border-b border-slate-300">Prénom</th>
          <th className="py-2 px-4 border-b border-slate-300">Nom</th>
          <th className="py-2 px-4 border-b border-slate-300">
            N° Sécurité Sociale
          </th>
          <th className="py-2 px-4 border-b border-slate-300">N° Adhérent</th>
          <th className="py-2 px-4 border-b border-slate-300">N° AMC</th>
          <th className="py-2 px-4 border-b border-slate-300">Type Conv</th>
          <th className="py-2 px-4 border-b border-slate-300">Validité</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b border-slate-300">{user.id}</td>
            <td className="py-2 px-4 border-b border-slate-300">
              {user.adherentPrenom}
            </td>
            <td className="py-2 px-4 border-b border-slate-300">
              {user.adherentNom}
            </td>
            <td className="py-2 px-4 border-b border-slate-300">
              {user.adherentNumSecu}
            </td>
            <td className="py-2 px-4 border-b border-slate-300">
              {user.numAdherent}
            </td>
            <td className="py-2 px-4 border-b border-slate-300">
              {user.numAmc}
            </td>
            <td className="py-2 px-4 border-b border-slate-300">
              {user.typeConv}
            </td>
            <td className="py-2 px-4 border-b border-slate-300">
              {user.periodeValidite}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
