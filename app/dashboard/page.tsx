import Table from "@/components/ui/Table";
import { TPass } from "@/types";

async function getAllPasses(): Promise<TPass[]> {
  const res = await fetch(process.env.API_URL + "/passes");

  if (!res.ok) {
    throw new Error("Failed to fetch passes");
  }

  const passes = await res.json();
  return passes;
}

export default async function Page() {
  const data = await getAllPasses();
  return (
    <>
      <Table data={data} />
    </>
  );
}
