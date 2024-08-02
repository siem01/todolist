import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [status, setStatus] = useState('all')
  return (
    <Tabs.Root defaultValue="all" onValueChange={(value) => setStatus(value)}>
      <main className="mx-auto w-[480px] pt-12">
        <div className="rounded-12 bg-white p-8 shadow-sm">
          <h1 className="text-center text-4xl font-extrabold text-gray-900">
            Todo App
          </h1>

          <Tabs.List
            className="flex shrink-0 justify-start space-x-2 pt-8"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="flex h-[44px] w-[66px] items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-[20px] py-[8px] font-semibold text-gray-600 data-[state=active]:bg-[#334155] data-[state=active]:text-white "
              value="all"
            >
              All
            </Tabs.Trigger>

            <Tabs.Trigger
              className="flex h-[44px] w-[104px] items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-[20px] py-[8px] font-semibold text-gray-600 data-[state=active]:bg-[#334155] data-[state=active]:text-white"
              value="pending"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className="flex h-[44px] w-[124px] items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-[20px] py-[8px] font-semibold text-gray-600 data-[state=active]:bg-[#334155] data-[state=active]:text-white"
              value="completed"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="rounded-b-md focus:shadow-black grow bg-white outline-none focus:shadow-[0_0_0_2px]"
            value="all"
          >
            <div className="pt-10">
              <TodoList status={status} />
            </div>

            <div className="pt-10">
              <CreateTodoForm />
            </div>
          </Tabs.Content>
          <Tabs.Content
            className="rounded-b-md focus:shadow-black grow bg-white outline-none focus:shadow-[0_0_0_2px]"
            value="pending"
          >
            <div className="pt-10">
              <TodoList status={status} />
            </div>

            <div className="pt-10">
              <CreateTodoForm />
            </div>
          </Tabs.Content>
          <Tabs.Content
            className="rounded-b-md focus:shadow-black grow bg-white outline-none focus:shadow-[0_0_0_2px]"
            value="completed"
          >
            <div className="pt-10">
              <TodoList status={status} />
            </div>

            <div className="pt-10">
              <CreateTodoForm />
            </div>
          </Tabs.Content>
        </div>
      </main>
    </Tabs.Root>
  )
}

export default Index
