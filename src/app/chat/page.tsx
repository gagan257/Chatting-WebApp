"use client";
import { UserButton } from "@clerk/nextjs";
import { StreamChat } from "stream-chat";
import {
  Channel,
  Chat,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
} from "stream-chat-react";
const userId = "user_2WQFuinAhyqddTQRROxRLF5rkyN";

const chatClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!);

chatClient.connectUser(
  {
    id: userId,
    name: "Gagan Arora",
  },
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yV1FGdWluQWh5cWRkVFFSUk94UkxGNXJreU4ifQ.MFZGhXXFvePT-yTVlEir9JIKlv2StFWBv-GlhmBVA0w"
);

const channel = chatClient.channel("messaging", "channel_1", {
  name: "channel #1",
  members: [userId],
});

export default function ChatPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
}
