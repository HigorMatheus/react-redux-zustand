import { Button } from '@/components/ui/button'
import { Input } from 'components/ui/input'
import { ModeToggle } from 'components/ui/mode-toggle'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from 'components/ui/table'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Check } from 'lucide-react'

export function Home() {
  const table = useReactTable<{ test: string }>({
    getCoreRowModel: getCoreRowModel(),
    data: [{ test: '123' }],
    columns: [
      {
        header: 'test',
        accessorKey: 'test',
      },
    ],
  })
  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="w-screen h-14 px-4 flex justify-between p-2 bg-zinc-300 dark:bg-zinc-900">
        <p>IContacts</p> <ModeToggle />
      </header>
      <div className="space-y-2 max-w-sm mx-auto my-auto">
        <p className="">Login</p>
        <div className="space-y-1">
          <label htmlFor="">Email</label>
          <Input />
        </div>
        <div className="space-y-1">
          <label htmlFor="">Senha</label>
          <Input />
        </div>
        <Button size={'icon'}>
          <Check />
        </Button>
        <Button size={'default'}>default</Button>
        <Button size={'lg'}>lg</Button>
        <Button size={'sm'}>sm</Button>
      </div>
      <div className="border border-red-900">
        <Table>
          <TableHeader>
            <TableHead>test</TableHead>
            <TableHead>test</TableHead>
            <TableHead>test</TableHead> <TableHead>test</TableHead>{' '}
            <TableHead>test</TableHead> <TableHead>test</TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
