import React from 'react
export const Users=({resource})=>{
	const users=resource.users.read*(
	return (
		<>
			<h3>users</h3>
			<ul>
				{users.map(user=>(
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	)
}