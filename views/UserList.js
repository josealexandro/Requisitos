import React from 'react'
import { View, Text, FlatList, } from 'react-native'
import { ListItem, Button, Icon  } from 'react-native-elements'
import users from '../data/users'

export default props => {

    function getActions(user) {
        return(
            <>
                    <Button
                        onPress={() => props.navigation.navigate( 'userForm', user)}
                        type="clear"
                        icon={<Icon  name="edit" size={25} color="red"  />}
                    />

                    <Button
                        onPress={() => props.navigation.navigate( 'userForm', user)}
                        type="clear"
                        icon={<Icon  name="delete" size={25} color="black"  />}
                    />
            </>
        )
    }

    function getUserItem( { item: user }) {
        return ( 
                <ListItem
                         leftAvatar={{source: {uri: user.avatarUrl}}}
                         key={user.id}
                         title={user.name}
                         subtitle={user.email}
                         bottomDivider
                         rightElement={getActions( user )}
                         onPress={( ) => props.navigation.navigate( 'UserForm' )}
                />
        )
    }


    return (
      <View>
          <FlatList
                keyExtractor={ user  => user.id.toString( )}
                data={ users }
                renderItem={getUserItem}
          />
      </View>
    )
}