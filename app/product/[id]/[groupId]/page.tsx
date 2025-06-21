export default async function Info({params}:{
    params:Promise<{id: string, groupId: string}>
}) {
    const { id, groupId } = await params;

    return (
      <div>
        ID: {id}, groupId = {groupId}
      </div>
    );
  }
  