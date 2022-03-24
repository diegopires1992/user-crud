import Layout from '../components/Layout';
import Table from '../components/Table';
import Button from '../components/Button';
import FormClient from '../components/FormClient';
import Client from '../core/Client';
import { formatDiagnosticsWithColorAndContext } from 'typescript';


export default function Home() {
  const clients = [
    new Client('carlos', 29, "1"),
    new Client('diego', 29, "2"),
    new Client('edimara', 28, "3"),
    new Client('diego', 29, "4"),
    new Client('jose', 75, "5"),
    new Client('diego pires', 29, "6"),
    new Client('simara fatima', 55, "7"),
    new Client('roberto', 29, "8"),
  ]

  function clientSelect(client) {
    console.log(client.name);

  }

  function clientTrash(client) {
    console.log(client);
  }

  return (
    <>
      <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
      `}>
        <Layout title="Simple registration">
          <div className="flex justify-end">
            <Button cor="gray"className='mb-4'>New Client</Button>
          </div>
          <span>
            <FormClient client={clients[0]}></FormClient>
            {/* <Table client={clients} clientSelect={clientSelect} clientTrash={clientTrash}></Table> */}
          </span>
        </Layout>
      </div>
    </>
  )
}
