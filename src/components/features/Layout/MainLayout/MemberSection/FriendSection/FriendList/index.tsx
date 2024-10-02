import { Avatar, Flex, HStack, Text } from '@chakra-ui/react'

import { Friend } from '@/types'

interface FriendListProps {
  friends: Friend[]
}

export const FriendList = ({ friends }: FriendListProps) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="start"
      paddingX={2}
      overflowY="scroll"
    >
      <Text fontSize="small" color="text_description" paddingY={1}>
        친한 친구 - {friends.length}
      </Text>
      <Flex flexDirection="column" width="full" maxHeight="30rem">
        {friends.map((friend) => (
          <HStack key={friend.friendId} paddingY={1.5}>
            <Avatar width={7} height={7} src={friend.imageUrl} />
            <Text>{friend.name}</Text>
          </HStack>
        ))}
      </Flex>
    </Flex>
  )
}
