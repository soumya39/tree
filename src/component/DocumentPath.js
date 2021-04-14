import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import {
  Route,
  useParams,
} from 'react-router';

const DocumentPath = () => {

    const [formData, setState] = useState({
        documentPath: ''

    });

    console.log(useParams());
    let { id } = useParams();

    const getPath = () => {
        axios.get(`http://localhost:3001/documents/${id}`)
            .then((response) => {
                console.log('loading....')
                setState({
                    ...formData,
                    documentPath: response.data.documentPath,

                })

            },
                (error) => {
                    console.log(error);
                }
            );
    };
    useEffect(() => {
        getPath();
    }, []);
    var started = false


    window.open(formData.documentPath, "_self");


    return (
        <div >

            <switch>
                <Route path="/documentpath/:id" children={<Child />} />
            </switch>



        </div>



    )


}
function Child() {

    let { id } = useParams();
    return (
        <div>

        </div>
    );

}

export default DocumentPath;

