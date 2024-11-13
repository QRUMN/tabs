'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatList } from '@/components/messages/chat-list';
import { ChatView } from '@/components/messages/chat-view';
import { GroupList } from '@/components/messages/group-list';
import { ActiveGroups } from '@/components/messages/active-groups';
import { Plus, Search } from 'lucide-react';

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Active Groups Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Party Groups</h2>
        <ActiveGroups />
      </div>

      {/* Messages Card */}
      <Card className="h-[calc(100vh-16rem)] flex">
        {/* Sidebar */}
        <div className="w-80 border-r flex flex-col">
          <div className="p-4 border-b space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Messages</h2>
              <Button size="icon" variant="ghost">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search messages..." />
            </div>
          </div>
          
          <Tabs defaultValue="chats" className="flex-1">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger 
                value="chats"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Direct Messages
              </TabsTrigger>
              <TabsTrigger 
                value="groups"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Groups
              </TabsTrigger>
            </TabsList>
            <ScrollArea className="flex-1">
              <TabsContent value="chats" className="m-0">
                <ChatList 
                  selectedId={selectedChat}
                  onSelect={setSelectedChat}
                />
              </TabsContent>
              <TabsContent value="groups" className="m-0">
                <GroupList
                  selectedId={selectedGroup}
                  onSelect={setSelectedGroup}
                />
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>

        {/* Chat View */}
        <div className="flex-1">
          <ChatView 
            chatId={selectedChat || selectedGroup}
            type={selectedChat ? 'direct' : 'group'}
          />
        </div>
      </Card>
    </div>
  );
}