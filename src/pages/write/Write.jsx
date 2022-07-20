import './write.css'

export default function Write() {
  return (
    <div className='write'>
      <form className='writeForm'>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id='fileInput' style={{display:'none'}}/>
          <input type="text" placeholder='Başlık' className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Melisa Tekeli'nin çok satan hikayeleri." type='text' className='writeInput writeText'></textarea>
        </div>
        <button className='writeSubmit'>Yayınla</button>
      </form>
    </div>
  )
}
