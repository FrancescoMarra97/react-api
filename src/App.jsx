import { useState } from 'react'

import './App.css'

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
function App() {
  const [titles, setTitle] = useState(article)
  const [newTitle, setNewTitle] = useState("")
  const [formData, setFormData] = useState(initialFormData)

  function addArticle(e) {
    e.preventDefault();

    setTitle([
      ...titles,
      formData.title,
    ]);


    setFormData({ ...formData, title: "" });
  }

  function handleFormField(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  function handleTrashTitleClick(e) {

    const titleIndexToTrash = Number(e.target.getAttribute("data-index"))
    console.log(titleIndexToTrash);
    const removeTitles = titles.filter((title, index) => index != titleIndexToTrash)
    console.log(removeTitles);
    setTitle(removeTitles)
  }
  return (
    <>

      <div className="container">

        <div>
          <h1 className='m-4'>New Article</h1>
        </div>
        <form onSubmit={addArticle}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add new article title"
              value={formData.title}
              onChange={handleFormField}
            /* required */
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="image"
              value={formData.image}
              onChange={handleFormField}
            />
          </div>
          <div className="input-group mb-3">
            <textarea
              className="form-control"
              placeholder="arcticle content"
              value={formData.content}
              onChange={handleFormField}
            />
          </div>
          <div className="input-group mb-3 d-flex align-items-center">
            <label className='m-2'>Category: </label>
            <select className='form-select' value={formData.category} onChange={handleFormField}>
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
              onChange={handleFormField}

            />
            <label className="form-check-label" htmlFor=""> Published </label>
          </div>
          <div>
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Send</button>
          </div>
          <small id='titleHelperId' className='mb-3 form-text text-muted'>type your new title</small>
        </form >

        <ul className='list-group'>
          {titles.map((article, index) =>
            <li key={index} className='list-group-item d-flex justify-content-between'>
              {article}
              <button className="btn btn-sm btn-danger" onClick={handleTrashTitleClick} data-index={index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>
              </button>
            </li>)}

        </ul>
      </div >
    </>
  )
}

export default App
