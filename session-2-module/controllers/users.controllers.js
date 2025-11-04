import axios from "axios";
const userURL = "https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json";
const getUsersFromURL = async () =>  axios.get(userURL);


const getUsers = async (req,res) => {
    const response = (await getUsersFromURL()).data;
    try{
        if(response) {
            res.send(response.data);
        }
        
    } catch (error) {
        res.status(500).send({"message": "Something went wrong"});
    }
    // res.send("<h1>Users Database</h1>");
}

const getUsersByID = async (req,res) => {
    try{
        // const {uuid} = req.params;
        const response = (await axios.get(userURL)).data.data;
        console.log(response,"getUsersByID", response.data.login.uuid)
        const reqUsers = response.data.data.find((user) => user.login.uuid === req.params);
        if(reqUsers) return res.send(reqUsers);
        res.status(404).send({"message": "Data not found"});
    } catch (error) {
        res.status(500).send({"message": "Something went wrong"});
    }
    res.send("<h1>Users Database</h1>")
};

const searchUserByAgeAndGender = async (req,res) => {
    try {
        const {gender,age} = req.query;
        const response = (await axios.get(userURL)).data;
        if(gender && age){
            return res.send(response.data.data.filter(user => user.gender === gender && user.dob.age == age));
        }
        else if(gender) {
            return res.send(response.data.data.filter(user => user.gender === gender));
        }
        else if(age) {
            return res.send(response.data.data.filter(user => user.dob.age == age));
        } else {
            res.status(400).send({"message":"Atleast one of gender or age must be sent as query parameters"})
        }
        
    }
    catch(error) {
        res.send({"message":"Something went wrong"});
    }
}

export { getUsers, getUsersByID, searchUserByAgeAndGender };