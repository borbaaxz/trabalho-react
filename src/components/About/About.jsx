import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, alunos} = about

  return (
    <div className='flex-col mt-12 flex items-center'>
      {name && (
        <h1 className='text-2xl'>
          Ola, somos o grupo <span className='text-blue-500 font-bold'>{name}.</span>
        </h1>
      )}
      <div>{role && <h2 className='mt-5'>A {role}.</h2>}
      <p className='text-base max-w-[600px]'>{description && description}</p>
      <div className='space-y-4 w-full flex flex-col justify-center items-center text-blue-500 font-bold text-4xl'>{alunos.map(aluno=>(<p>{aluno}</p>))}</div>
      </div>
      

      <div className='mt-10 flex items-center gap-4'>
        {resume && (
          <a className='border px-4 py-2 hover:bg-blue-500 transition-colors duration-200 ease-in-out rounded-lg' href={resume}>
            <span type='button' className='btn btn--outline'>
              Resumo
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
