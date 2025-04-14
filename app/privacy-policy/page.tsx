const Policies = () => {
  return (
    <div className="flex flex-col gap-10 items-center h-[100%] bg-gradient-to-r py-[50px] from-purple-800 to-pink-900">
      <img src="/logo.png" alt="logo" className="h-20 w-auto" />
      <div className="text-left p-10 bg-neutral-200 rounded-lg shadow-xl max-w-[800px] w-[90%]">
        <h1 className="text-[32px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Política de Privacidade — Happy Nation Spy
        </h1>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          <strong>Última atualização:</strong> Abril de 2025
        </p>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          A extensão <strong>Happy Nation Spy</strong> foi desenvolvida com o
          compromisso de respeitar a sua privacidade e proteger as suas
          informações.
        </p>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          Esta política explica de forma clara e objetiva como os dados dos
          usuários são coletados, utilizados e protegidos quando você utiliza a
          nossa extensão na Chrome Web Store.
        </p>
        <h2 className="text-[24px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Informações coletadas
        </h2>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          A extensão coleta apenas as seguintes informações:
        </p>
        <ul className="list-disc pl-7 space-y-2">
          <li>Endereço de e-mail do usuário</li>
          <li>Nome ou identificador do usuário</li>
          <li>
            Informações necessárias para autenticação e controle de acesso
          </li>
        </ul>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          Essas informações são fornecidas diretamente pelo usuário no momento
          do login.
        </p>
        <h2 className="text-[24px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Finalidade da coleta de dados
        </h2>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          Essas informações são utilizadas exclusivamente para:
        </p>
        <ul className="list-disc pl-7 space-y-2">
          <li>Permitir que o usuário acesse os recursos da extensão</li>
          <li>Autenticar o usuário de forma segura</li>
          <li>Controlar o uso autorizado da ferramenta</li>
        </ul>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          <strong>Não coletamos</strong> dados de navegação, histórico, senhas
          ou qualquer outra informação pessoal além do necessário para login.
        </p>
        <h2 className="text-[24px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Compartilhamento de dados
        </h2>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          O <strong>Happy Nation Spy</strong> não compartilha, vende ou
          disponibiliza os dados dos usuários a terceiros.
        </p>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          As informações coletadas são utilizadas unicamente para os fins
          operacionais da extensão.
        </p>
        <h2 className="text-[24px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Armazenamento e segurança
        </h2>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          Os dados coletados são armazenados de forma segura e criptografada,
          respeitando os padrões de segurança recomendados.
        </p>
        <h2 className="text-[24px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Direitos do usuário
        </h2>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          O usuário pode, a qualquer momento, solicitar:
        </p>
        <ul className="list-disc pl-7 space-y-2">
          <li>A exclusão dos seus dados</li>
          <li>Informações adicionais sobre os dados armazenados</li>
        </ul>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          Basta entrar em contato pelo e-mail abaixo.
        </p>
        <h2 className="text-[24px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Contato
        </h2>
        <p className="mt-4 text-[16px] my-[10px] text-black">
          <strong>E-mail: </strong>
          <a href="mailto:suportemarconihappynation@gmail.com">
            suportemarconihappynation@gmail.com
          </a>
          <p className="mt-4 text-[16px] my-[10px] text-black">
            <strong>Site oficial: </strong>
            <a rel="noopener" href="https://happynationspy.com" target="_blank">
              https://happynationspy.com
            </a>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Policies;
