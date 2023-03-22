export default function ContactForm({ block, dataBinding }) {
  return (
    <section className='contact' data-cms-bind={dataBinding}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 me-auto order-2 order-lg-1'>
            <div className='contact-form-Information'>
              <div className='address'>
                {block.address && (
                  <>
                    <h3>{block.address.heading}</h3>
                    <p>{block.address.address}</p>
                  </>
                )}
                <div className='item mb-4'>
                  {block.phone && (
                    <>
                      <h3>{block.phone.heading}</h3>
                      <a href={`tel:${block.phone.cell}`}>
                        {block.phone.cell}
                        <span>
                          <img
                            src={block.phone.image}
                            alt={block.phone.image_alt}
                            loading='lazy'
                          />
                        </span>
                      </a>
                    </>
                  )}
                </div>
                <div className='item'>
                  {block.email && (
                    <>
                      <h3>{block.email.heading}</h3>
                      <a href={`mailto:${block.email.email}`}>
                        {block.email.email}
                        <span>
                          <img
                            src={block.email.image}
                            alt={block.email.image_alt}
                            loading='lazy'
                          />
                        </span>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 order-1 order-lg-2'>
            <div className='contact-form'>
              <form method='post'>
                <h3>{block.form.heading}</h3>
                <div className='col-12'>
                  <a
                    className='btn btn-primary btn-lg mt-7'
                    href='https://wa.me/5583982345092?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20consulta.'
                  >
                    <span className='position-relative'>Entrar em contato</span>
                  </a>
                </div>
              </form>
              <div className='effect'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
