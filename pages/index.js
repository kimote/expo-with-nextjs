// @generated: @expo/next-adapter@4.0.10
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";


const url = "http://localhost:3000/api/User";
export default function App() {


const [users, setUsers] = useState(props.users);
	const [user, setUser] = useState({ user: "" });

	const handleChange = ({ currentTarget: input }) => {
		input.value === ""
			? setUser({ task: "" })
			: setUser((prev) => ({ ...prev, user: input.value }));
	};

	const addUser = async (e) => {
		e.preventDefault();
		try {
			if (user._id) {
				const { data } = await axios.put(url + "/" + user._id, {
					user: user.user,
				});
				const originalUsers = [...users];
				const index = originalTasks.findIndex((t) => t._id === task._id);
				originalUsers[index] = data.data;
				setUsers(originalUsers);
				setUser({ user: "" });
				console.log(data.message);
			} else {
				const { data } = await axios.post(url, task);
				setUsers((prev) => [...prev, data.data]);
				setUser({ user: "" });
				console.log(data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const editUser = (id) => {
		const currentUser = users.filter((user) => user._id === id);
		setUser(currentUser[0]);
	};

	const updateUser = async (id) => {
		try {
			const originalUsers = [...users];
			const index = originalUsers.findIndex((t) => t._id === id);
			const { data } = await axios.put(url + "/" + id, {
				completed: !originalUsers[index].completed,
			});
			originalUsers[index] = data.data;
			setUsers(originalUsers);
			console.log(data.message);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteUser = async (id) => {
		try {
			const { data } = await axios.delete(url + "/" + id);
			setUsers((prev) => prev.filter((user) => user._id !== id));
			console.log(data.message);
		} catch (error) {
			console.log(error);
		}
	};




  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
})


export const getServerSideProps = async () => {
	const { data } = await axios.get(url);
	return {
		props: {
			tasks: data.data,
		},
	};
};