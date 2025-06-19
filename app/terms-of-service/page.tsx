const Policies = () => {
  return (
    <div className="flex flex-col gap-10 items-center min-h-screen bg-gradient-to-r py-[50px] from-purple-800 to-pink-900">
      <img src="/logo.png" alt="logo" className="h-20 w-auto" />
      <div className="text-left p-10 bg-neutral-200 rounded-lg shadow-xl max-w-[800px] w-[90%] text-black">
        {/* Título Principal */}
        <h1 className="text-[32px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Termos de Serviço — Happy Nation Spy
        </h1>
        <p className="mt-4 text-[16px] my-[10px]">
          <strong>Última atualização:</strong> Junho de 2025
        </p>

        {/* Seção 1: Aceitação dos Termos */}
        <h2 className="text-[24px] mt-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          1. Aceitação dos Termos
        </h2>
        <p className="mt-4 text-[16px] my-[10px]">
          Seja bem-vindo(a) ao <strong>Happy Nation Spy!</strong> Ao instalar,
          acessar ou utilizar nossa extensão, você confirma que leu, entendeu e
          concorda em estar vinculado a estes Termos de Serviço
          (&quot;Termos&quot;) e à nossa{" "}
          <a href="/privacy-policy" className="text-purple-600 hover:underline">
            Política de Privacidade
          </a>
          . Se você não concordar com qualquer parte dos Termos, não poderá
          utilizar nosso Serviço.
        </p>

        {/* Seção 2: Descrição do Serviço */}
        <h2 className="text-[24px] mt-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          2. Descrição do Serviço
        </h2>
        <p className="mt-4 text-[16px] my-[10px]">
          O Happy Nation Spy é uma ferramenta de software (extensão para
          navegador) projetada para auxiliar usuários a otimizar a busca e
          análise de anúncios na plataforma do Facebook. As funcionalidades
          incluem:
        </p>
        <ul className="list-disc pl-7 space-y-2 mt-4 text-[16px]">
          <li>Busca avançada e filtragem de anúncios.</li>
          <li>
            Capacidade de salvar anúncios em uma lista de &quot;favoritos&quot;.
          </li>
          <li>Análise de métricas e tendências de anúncios.</li>
        </ul>
        <p className="mt-4 text-[16px] my-[10px]">
          O uso da Extensão é de sua inteira responsabilidade. A ferramenta visa
          auxiliar na análise de dados públicos, e não nos responsabilizamos
          pelas decisões de negócios que você venha a adotar com base nas
          informações obtidas.
        </p>

        {/* Seção 3: Contas de Usuário */}
        <h2 className="text-[24px] mt-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          3. Contas de Usuário e Segurança
        </h2>
        <p className="mt-4 text-[16px] my-[10px]">
          Para acessar os recursos da Extensão, você precisará criar uma conta.
          Você concorda em:
        </p>
        <ul className="list-disc pl-7 space-y-2 mt-4 text-[16px]">
          <li>
            Fornecer informações verdadeiras, precisas e completas (nome,
            e-mail, telefone, etc.) durante o registro.
          </li>
          <li>
            Manter a confidencialidade de sua senha e credenciais de acesso.
          </li>
          <li>
            Assumir total responsabilidade por todas as atividades que ocorram
            em sua conta.
          </li>
          <li>
            Notificar-nos imediatamente sobre qualquer uso não autorizado de sua
            conta.
          </li>
        </ul>

        {/* Seção 4: Coleta e Uso de Dados */}
        <h2 className="text-[24px] mt-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          4. Coleta e Uso de Dados
        </h2>
        <p className="mt-4 text-[16px] my-[10px]">
          Nossa coleta e uso de informações estão detalhadamente descritos em
          nossa{" "}
          <a href="/privacy-policy" className="text-purple-600 hover:underline">
            Política de Privacidade
          </a>
          . Ao utilizar o Happy Nation Spy, você concorda com a coleta e o uso
          dos seguintes dados:
        </p>
        <ul className="list-disc pl-7 space-y-2 mt-4 text-[16px]">
          <li>
            <strong>Dados de Autenticação:</strong> Seu e-mail, nome e outras
            informações necessárias para criar e proteger sua conta.
          </li>
          <li>
            <strong>Informações de Compra:</strong> Dados fornecidos durante a
            aquisição de uma licença, como nome e informações de contato, para
            faturamento e gerenciamento de acesso.
          </li>
          <li>
            <strong>Dados de Anúncios:</strong> A Extensão armazena dados
            relacionados aos anúncios que você analisa e salva para o
            funcionamento dos recursos.
          </li>
        </ul>

        {/* Seção 5: Propriedade Intelectual */}
        <h2 className="text-[24px] mt-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          5. Propriedade Intelectual
        </h2>
        <p className="mt-4 text-[16px] my-[10px]">
          Todo o conteúdo, design, código-fonte e logotipos da Extensão Happy
          Nation Spy são de nossa propriedade exclusiva. Você concorda em não
          copiar, modificar, distribuir, vender ou alugar qualquer parte do
          nosso Serviço sem nossa permissão expressa por escrito.
        </p>

        {/* Seção 6: Limitação de Responsabilidade */}
        <h2 className="text-[24px] mt-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          6. Limitação de Responsabilidade
        </h2>
        <p className="mt-4 text-[16px] my-[10px]">
          O Happy Nation Spy é fornecido <strong>&quot;como está&quot;</strong>{" "}
          e <strong>&quot;conforme disponível&quot;</strong>. Em nenhuma
          circunstância o Happy Nation Spy ou seus desenvolvedores serão
          responsáveis por quaisquer danos diretos ou indiretos resultantes do
          seu acesso ou uso da Extensão.
        </p>

        {/* Seção 7: Rescisão */}
        <h2 className="text-[24px] mt-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          7. Rescisão
        </h2>
        <p className="mt-4 text-[16px] my-[10px]">
          Podemos suspender ou rescindir seu acesso à Extensão a nosso critério,
          sem aviso prévio, por qualquer motivo, incluindo violação destes
          Termos. O usuário pode solicitar a exclusão de sua conta a qualquer
          momento.
        </p>

        {/* Seção 8: Alterações nos Termos */}
        <h2 className="text-[24px] mt-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          8. Alterações nos Termos de Serviço
        </h2>
        <p className="mt-4 text-[16px] my-[10px]">
          Reservamo-nos o direito de modificar estes Termos a qualquer momento.
          A continuação do uso da Extensão após a publicação de alterações
          significa que você aceita e concorda com os Termos revisados.
        </p>

        {/* Seção 9: Contato */}
        <h2 className="text-[24px] mt-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          9. Contato
        </h2>
        <p className="mt-4 text-[16px] my-[10px]">
          Para quaisquer dúvidas relacionadas a estes Termos, entre em contato
          conosco:
        </p>
        <div className="mt-4 text-[16px] my-[10px]">
          <p>
            <strong>E-mail: </strong>
            <a
              href="mailto:suportemarconihappynation@gmail.com"
              className="text-purple-600 hover:underline"
            >
              suportemarconihappynation@gmail.com
            </a>
          </p>
          <p className="mt-2">
            <strong>Site oficial: </strong>
            <a
              rel="noopener noreferrer"
              href="https://happynationspy.com"
              target="_blank"
              className="text-purple-600 hover:underline"
            >
              https://happynationspy.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

/*

Termos de Serviço — Happy Nation Spy
Última atualização: Junho de 2025

Bem-vindo ao Happy Nation Spy!



1. Aceitação dos Termos

Ao criar uma conta e utilizar a Extensão Happy Nation Spy, você confirma que leu, entendeu e concorda em estar vinculado a estes Termos e à nossa Política de Privacidade.

2. Descrição do Serviço

O Happy Nation Spy é uma ferramenta de software (extensão para navegador) projetada para auxiliar usuários a otimizar a busca e análise de anúncios na plataforma do Facebook. As funcionalidades incluem, mas não se limitam a:

Busca avançada e filtragem de anúncios.
Capacidade de salvar anúncios em uma lista de "favoritos".
Análise de métricas e tendências de anúncios.
O uso da Extensão é de sua inteira responsabilidade. A ferramenta visa auxiliar na análise de dados públicos, e não nos responsabilizamos pelas decisões de negócios ou estratégias que você venha a adotar com base nas informações obtidas.

3. Contas de Usuário e Segurança

Para acessar os recursos da Extensão, você precisará criar uma conta. Você concorda em:

Fornecer informações verdadeiras, precisas e completas, incluindo nome, e-mail e informações de contato (como telefone) durante o processo de registro e compra.
Manter a confidencialidade de sua senha e credenciais de acesso.
Assumir total responsabilidade por todas as atividades que ocorram em sua conta.
Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta através do e-mail: suportemarconihappynation@gmail.com.
4. Coleta e Uso de Dados

Nossa coleta e uso de informações estão detalhadamente descritos em nossa Política de Privacidade. Ao utilizar o Happy Nation Spy, você concorda com a coleta e o uso de dados conforme estabelecido, incluindo:

Dados de Autenticação: Seu e-mail, nome e outras informações necessárias para criar e proteger sua conta.
Informações de Compra: Armazenamos os dados fornecidos durante a aquisição de um plano ou licença, como nome e informações de contato, para fins de faturamento e gerenciamento de acesso.
Dados de Anúncios: A Extensão coleta e armazena dados relacionados aos anúncios que você analisa e salva, permitindo o funcionamento dos recursos de filtragem e favoritismo.
Não nos responsabilizamos pela precisão, legalidade ou conteúdo dos anúncios de terceiros visualizados através da nossa ferramenta.

5. Propriedade Intelectual

Todo o conteúdo, design, código-fonte, logotipos, e demais elementos da Extensão Happy Nation Spy são de nossa propriedade exclusiva e protegidos pelas leis de propriedade intelectual. Você concorda em não copiar, modificar, distribuir, vender ou alugar qualquer parte do nosso Serviço ou software sem nossa permissão expressa por escrito.

É concedida a você uma licença limitada, não exclusiva e intransferível para usar a Extensão estritamente de acordo com estes Termos.

6. Limitação de Responsabilidade

O Happy Nation Spy é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que a ferramenta será ininterrupta, livre de erros ou que atenderá a todas as suas expectativas.

Em nenhuma circunstância o Happy Nation Spy ou seus desenvolvedores serão responsáveis por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do seu acesso ou uso (ou incapacidade de uso) da Extensão.

7. Rescisão

Podemos suspender ou rescindir seu acesso à Extensão a nosso critério, sem aviso prévio, por qualquer motivo, incluindo, mas não se limitando a, violação destes Termos.

O usuário pode solicitar a exclusão de sua conta e dados a qualquer momento, entrando em contato conosco, conforme descrito em nossa Política de Privacidade.

8. Alterações nos Termos de Serviço

Reservamo-nos o direito de modificar estes Termos a qualquer momento. A data da "Última atualização" no topo desta página indicará quando as revisões foram feitas. A continuação do uso da Extensão após a publicação de alterações significa que você aceita e concorda com os Termos revisados.

9. Contato

Para quaisquer dúvidas, sugestões ou questões relacionadas a estes Termos de Serviço, entre em contato conosco:

E-mail: suportemarconihappynation@gmail.com
Site Oficial: https://happynationspy.com

*/

export default Policies;
