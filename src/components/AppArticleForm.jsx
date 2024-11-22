import { useState } from "react";

export default function AppArticleForm({ addArticle }) {

    const article = [

    ]

    const initialFormData = {
        title: "",
        image: "",
        content: "",
        category: "",
        tags: [],
        published: false,
    }
    const [formData, setFormData] = useState(initialFormData)
    const [titles, setTitle] = useState(article)
    function addArticle(e) {
        e.preventDefault()


        setTitle([
            ...titles,
            { id: Date.now(), ...formData }
        ])

        setFormData({
            ...formData,
            title: "",
            image: "",
            content: "",
            category: "",
            tags: [],
            published
        })
    }


    return (
        <form onSubmit={addArticle}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add new article title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                /*  required */
                />
            </div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="image"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
            </div>
            <div className="input-group mb-3">
                <textarea
                    className="form-control"
                    placeholder="arcticle content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                />
            </div>
            <div className="input-group mb-3 d-flex align-items-center">
                <label className='m-2'>Category: </label>
                <select className='form-select' value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                    <option></option>
                    <option value="Sports">Sports</option>
                    <option value="Tech">Tech</option>
                    <option value="Health">Health</option>
                    <option value="Coding">Coding</option>
                    <option value="Games">Videogames</option>
                </select>
            </div>
            <div className="m-3 d-flex align-items-center">
                <label>Tags:</label>
                <div className='d-flex'>
                    <div className='mx-1'>
                        <input
                            type="checkbox"
                            value="Tech"
                            checked={formData.tags.includes('Tech')}
                            onChange={(e) => {
                                const updatedTags = e.target.checked
                                    ? [...formData.tags, 'Tech']
                                    : formData.tags.filter(tag => tag !== 'Tech');
                                setFormData({ ...formData, tags: updatedTags });
                            }}
                        />
                        Tech
                    </div>
                    <div className='mx-1'>
                        <input
                            type="checkbox"
                            value="Sports"
                            checked={formData.tags.includes("Sports")}
                            onChange={(e) => {
                                const updatedTags = e.target.checked
                                    ? [...formData.tags, 'Sports']
                                    : formData.tags.filter(tag => tag !== 'Sports');
                                setFormData({ ...formData, tags: updatedTags });
                            }}
                        />Sports
                    </div>
                    <div className='mx-1'>
                        <input
                            type="checkbox"
                            value="Games"
                            checked={formData.tags.includes("Games")}
                            onChange={(e) => {
                                const updatedTags = e.target.checked
                                    ? [...formData.tags, 'Games']
                                    : formData.tags.filter(tag => tag !== 'Games');
                                setFormData({ ...formData, tags: updatedTags });
                            }}
                        />Videogames
                    </div>
                    <div className='mx-1'>
                        <input
                            type="checkbox"
                            value="Health"
                            checked={formData.tags.includes("Health")}
                            onChange={(e) => {
                                const updatedTags = e.target.checked
                                    ? [...formData.tags, 'Health']
                                    : formData.tags.filter(tag => tag !== 'Health');
                                setFormData({ ...formData, tags: updatedTags });
                            }}
                        />Health
                    </div>
                    <div className='mx-1'>
                        <input
                            type="checkbox"
                            value="Coding"
                            checked={formData.tags.includes("Coding")}
                            onChange={(e) => {
                                const updatedTags = e.target.checked
                                    ? [...formData.tags, 'Coding']
                                    : formData.tags.filter(tag => tag !== 'Coding');
                                setFormData({ ...formData, tags: updatedTags });
                            }}
                        />Coding
                    </div>

                </div>
            </div>
            <div className="form-check mb-3">
                <input
                    id="published"
                    name='published'
                    type="checkbox"
                    className="form-check-input"
                    value={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}

                />
                <label className="form-check-label" htmlFor=""> Published </label>
            </div>
            <div className='d-flex'>
                <div><button className="btn btn-outline-secondary" type="submit" id="button-addon2">Send</button></div>
                {/*             <div className='fetch-button'><button className="btn btn-outline-secondary" type="submit" id="button-addon2" onClick={handleClickSend}>fetch</button></div>*/}          </div>
            {/*  <small id='titleHelperId' className='mb-3 form-text text-muted'>type your new title</small> */}
        </form >
    )
}