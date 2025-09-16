import { View, Text } from 'react-native'
import React from 'react'

// Define the types for the props
type CardProps = {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => {
  return (
    <View className='bg-card-background p-4 rounded-md min-h-40 container '>
      <Text className='text-white text-xl font-bold py-2'>{title}</Text>
      <Text className='text-secondary-text text-xl'>{content}</Text>
    </View>
  )
}

export default Card