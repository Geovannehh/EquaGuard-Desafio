var fotos=["assets/img/maria.jpg","assets/img/pedro.jpg","assets/img/flavio.jpg"];
var pessoas=[
 {nome:"Maria",artigo:"a",cargo:"Analista",foto:fotos[0],tag:"Linha de frente do atendimento",
  resumo:"Maria é o rosto da empresa para quem precisa de ajuda. Cuida do atendimento e das rotinas administrativas, com muitas demandas ao mesmo tempo.",
  lista:["Atende clientes e colegas por telefone, chat e e-mail.","Registra pedidos e consulta dados cadastrais nos sistemas.","Recebe muitos e-mails, links e anexos todos os dias.","Segue procedimentos e escala os casos difíceis para a liderança."],
  ident:["Falo com clientes ou colegas o dia todo.","Uso sistemas para registrar e consultar informações.","Preciso agir rápido, mas seguindo o processo."],
  pronto:"Você vai enfrentar a missão pela visão de quem está na linha de frente: cada e-mail e cada dado de cliente conta."},
 {nome:"Pedro",artigo:"o",cargo:"Liderança",foto:fotos[1],tag:"Quem recebe as demandas e decide",
  resumo:"Pedro é o coordenador da equipe. As demandas chegam até ele, e é ele quem resolve os problemas e decide o que fazer quando algo foge do normal.",
  lista:["Recebe as demandas e os casos escalados pela equipe.","Resolve problemas, remove bloqueios e define prioridades.","Aprova acessos e decisões que envolvem risco.","Conversa com outras áreas e presta contas à gestão."],
  ident:["Os problemas da equipe chegam até mim.","Preciso decidir quando algo foge do normal.","Aprovo acessos e presto contas à gestão."],
  pronto:"Você vai conduzir a missão: priorizar, decidir e agir com segurança."},
 {nome:"Flávio",artigo:"o",cargo:"Técnico",foto:fotos[2],tag:"Quem mantém tudo funcionando",
  resumo:"Flávio trabalha na TI e já mexe com isso todos os dias. Mantém a estrutura que faz a empresa funcionar e costuma ser o primeiro a perceber algo estranho.",
  lista:["Cuida de servidores, redes e equipamentos.","Atende chamados e resolve falhas de acesso e de dispositivos.","Faz atualizações, backups e controle de permissões.","Monitora alertas e investiga comportamentos suspeitos."],
  ident:["Trabalho com tecnologia, suporte ou infraestrutura.","Já lido com segurança da informação no meu dia a dia.","Sou chamado quando algo para de funcionar."],
  pronto:"Você vai defender a infraestrutura: acessos, dispositivos e sistemas críticos estão nas suas mãos."}
];
var $=function(id){return document.getElementById(id)};
var cards=$("cards"),ultimo=null,atual=0;
pessoas.forEach(function(p,i){
  var b=document.createElement("button");
  b.className="card";
  b.innerHTML='<img class="ph" src="'+p.foto+'" alt="Foto de '+p.nome+'"><div class="ct"><span class="role">'+p.cargo+'</span><h3>'+p.nome+'</h3><span class="tag">'+p.tag+'</span></div>';
  b.addEventListener("click",function(){abrir(i,b)});
  cards.appendChild(b);
});
function tela(id){document.querySelectorAll(".screen").forEach(function(s){s.classList.remove("on")});$(id).classList.add("on");window.scrollTo(0,0)}
function abrir(i,el){
  var p=pessoas[i];ultimo=el;atual=i;
  $("mAv").src=p.foto;$("mAv").alt="Foto de "+p.nome;
  $("mNome").textContent=p.nome;$("mRole").textContent=p.cargo;$("mResumo").textContent=p.resumo;
  $("mLista").innerHTML=p.lista.map(function(t){return "<li>"+t+"</li>"}).join("");
  $("mIdent").innerHTML=p.ident.map(function(x){return "<li>"+x+"</li>"}).join("");
  $("seguir").textContent="Seguir com "+(p.artigo==="a"?"a ":"o ")+p.nome;
  $("modal").classList.add("on");$("seguir").focus();
}
function fechar(){$("modal").classList.remove("on");if(ultimo)ultimo.focus()}
$("comecar").addEventListener("click",function(){tela("ident");$("nomeJog").focus()});
$("identVolta").addEventListener("click",function(){tela("inicio")});
$("identOk").addEventListener("click",function(){
  var n=$("nomeJog").value.trim().replace(/\s+/g," "),s=$("setorJog").value.trim().replace(/\s+/g," ");
  if(n.length<2){$("nomeErr").textContent="Digite um nome ou apelido para continuar.";$("nomeJog").focus();return}
  if(s.length<2){$("nomeErr").textContent="Selecione a sua área para continuar.";$("setorJog").focus();return}
  jogador=n;setor=s;$("nomeErr").textContent="";tela("equipe");
});
["nomeJog","setorJog"].forEach(function(id){$(id).addEventListener("keydown",function(e){if(e.key==="Enter")$("identOk").click()})});
$("voltar").addEventListener("click",function(){tela("inicio")});
$("fechar").addEventListener("click",fechar);
$("seguir").addEventListener("click",function(){
  var p=pessoas[atual];
  $("modal").classList.remove("on");
  $("pAv").src=p.foto;$("pAv").alt="Foto de "+p.nome;
  $("pTitulo").textContent="Você é "+p.nome+" ("+p.cargo+")";
  $("pTexto").textContent=p.pronto;
  tela("pronto");
});
$("trocar").addEventListener("click",function(){tela("equipe")});
$("modal").addEventListener("click",function(e){if(e.target===this)fechar()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")fechar()});
var fundo="assets/img/fundo.jpg";
$("stage").style.backgroundImage="url("+fundo+")";
var DOM="equatorialenergia.com.br";
var emails=[
 {nome:"RH Equatorial",end:"rh@equatoriall-energia.com",assunto:"Atualização cadastral obrigatória: prazo termina hoje",hora:"07:58",para:"Você",fish:true,
  corpo:'Prezado colaborador,<br><br>Identificamos pendências no seu cadastro. Para evitar o <b>bloqueio do seu acesso</b> ao sistema, atualize seus dados <a data-u="http://equatorial-rh.cadastro-seguro.com/login">neste link</a> até as 18h de hoje.<br><br>Será necessário informar seu CPF, matrícula e a senha da rede.<br><br>Atenciosamente,<br>Recursos Humanos',
  pistas:["O endereço do remetente tem um erro (equatoriall-energia) e termina em .com, e não no domínio oficial.","O link leva a um site externo e sem https, diferente do domínio da empresa.","Cria urgência e ameaça bloquear o acesso.","Pede senha por e-mail, algo que o RH nunca faz."]},
 {nome:"Comunicação Interna",end:"comunicacao@"+DOM,assunto:"Manutenção programada da intranet neste sábado",hora:"08:42",para:"Você",fish:false,
  corpo:'Olá,<br><br>A intranet ficará indisponível neste sábado, das 22h às 23h30, para manutenção. Mais detalhes no <a data-u="https://intranet.'+DOM+'/comunicados">comunicado oficial</a>.<br><br>Equipe de Comunicação',
  pistas:["O remetente está no domínio oficial da empresa.","O link usa https e pertence ao mesmo domínio.","Apenas informa: não pede dados nem cria urgência."]},
 {nome:"Equatorial Energia",end:"faturas@equatorial-fatura.top",assunto:"2ª via da sua fatura de março disponível",hora:"09:15",para:"Destinatários ocultos",fish:true,anexo:"fatura_marco.pdf.exe",
  corpo:'Olá,<br><br>Sua fatura já está disponível. Abra o arquivo anexo para conferir o valor e evitar o <b>corte no fornecimento</b>. Se preferir, pague agora por este link: <a data-u="http://bit.ly/3xFaTuRa">pagar fatura</a>.',
  pistas:["O domínio .top não é o da empresa.","O anexo termina em .pdf.exe: é um programa disfarçado de PDF.","O link encurtado esconde o destino real.","Ameaça de corte para pressionar, e o destinatário está oculto."]},
 {nome:"Carlos Menezes",end:"carlos.menezes@"+DOM,assunto:"Alinhamento do time amanhã às 9h",hora:"09:40",para:"Equipe de Operações",fish:false,
  corpo:'Bom dia, pessoal.<br><br>Amanhã às 9h faremos o alinhamento semanal na sala 3 (ou pelo Teams). Pauta: prioridades da semana e dúvidas gerais. Quem tiver algum ponto, me avise até o fim do dia.<br><br>Abraço,<br>Carlos',
  pistas:["Remetente no domínio oficial.","Sem links, anexos ou pedido de dados.","Assunto e pauta fazem sentido com a rotina da equipe."]},
 {nome:"Diretoria Equatorial",end:"diretoria.ceo.equatorial@gmail.com",assunto:"URGENTE E CONFIDENCIAL: preciso da sua ajuda",hora:"10:03",para:"Você",fish:true,
  corpo:'Estou em reunião e não posso atender ligações. Preciso que você compre 5 cartões-presente de R$ 500 e me envie os códigos por aqui ainda hoje. Não comente com ninguém. Depois eu reembolso.<br><br>Enviado do meu celular',
  pistas:["O endereço é gmail, e não corporativo, apesar do nome \"Diretoria Equatorial\".","Pede sigilo e urgência.","Compra de cartões-presente não faz parte de nenhum processo da empresa.","Impede você de confirmar por telefone."]},
 {nome:"Segurança da Informação",end:"seguranca@"+DOM,assunto:"Novo treinamento disponível na plataforma de aprendizagem",hora:"10:15",para:"Você",fish:false,
  corpo:'Olá!<br><br>Já está disponível o curso "Boas práticas de segurança no dia a dia". Acesse pela plataforma de aprendizagem, com o seu login habitual, até o fim do mês: <a data-u="https://aprendizagem.'+DOM+'/cursos">acessar plataforma</a>.<br><br>Dúvidas? Fale com o time pelo canal oficial.',
  pistas:["Remetente no domínio oficial.","O link usa https e é do mesmo domínio da empresa.","Prazo razoável e nenhum pedido de senha ou dados."]}
];
var AVISO_EXT="AVISO: este e-mail foi originado de fora do Grupo Equatorial. Não clique em links nem abra anexos de remetentes desconhecidos.";
emails.forEach(function(e){e.ext=e.end.slice(-DOM.length-1)!=="@"+DOM;if(e.ext&&e.fish)e.pistas.push("O aviso de e-mail externo estava no topo.")});
var resp={},pontos=0,bonus=0,reportado={},aberto=-1,quedas=0,enviado=false,jogador="",setor="";

/* ===== Envio para o Google Sheets (via Google Apps Script) ===== */
var SHEETS_URL="https://script.google.com/macros/s/AKfycbxU1JujEMX-i6r7u2xvE8rk92w_rczVPrZyw7oeXa7LoZneg2cUIrYasw2Hv4du7qz0Kg/exec"; /* termina em /exec */
var FILA="equaguard_fila";
function lerFila(){try{return JSON.parse(localStorage.getItem(FILA)||"[]")}catch(e){return[]}}
function gravarFila(f){try{localStorage.setItem(FILA,JSON.stringify(f))}catch(e){}}
function sheetsAtivo(){return SHEETS_URL.indexOf("https://")===0}
function postar(d){
  return fetch(SHEETS_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(d)});
}
function reenviarFila(){
  if(!sheetsAtivo())return;
  var f=lerFila();if(!f.length)return;
  gravarFila([]);
  f.forEach(function(d){postar(d).catch(function(){gravarFila(lerFila().concat([d]))})});
}
function enviarResultado(selo){
  if(enviado)return;enviado=true;
  var ac=0,pa=0;emails.forEach(function(e,i){if((resp[i]==="sus")===e.fish)ac++;else if(resp[i]==="sus"&&!e.fish)pa++});
  var d={nome:jogador,setor:setor,modulo:"Módulo 1: Phishing e Engenharia Social",
    acertos:ac,parciais:pa,erros:emails.length-ac-pa,pontos:pontos+bonus,selo:selo,quedas:quedas,reportouQueda:Object.keys(reportado).length,engSocial:(socialFeito?"Confirmou pelo contato salvo":"Não realizado"),engSocialPrimeira:soEsc[0]||"",engSocialEscolhas:soEsc.join(">"),dataHora:new Date().toISOString()};
  if(!sheetsAtivo()){console.warn("Google Sheets não configurado. Resultado:",d);return}
  postar(d).then(reenviarFila).catch(function(){gravarFila(lerFila().concat([d]))});
}
window.addEventListener("load",reenviarFila);
function meuEmail(){var n=pessoas[atual].nome.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();return n+"@"+DOM}
function renderLista(){
  $("mlist").innerHTML=emails.map(function(e,i){
    var f=resp[i]!==undefined;
    return '<button class="mi'+(f?' feito':'')+(i===aberto?' sel':'')+'" data-i="'+i+'"><div class="l1"><span>'+e.nome+'</span><small>'+e.hora+'</small></div><div class="l2">'+e.assunto+'</div><div class="l3">'+(f?'<span class="ok">✓ Analisado</span>':e.corpo.replace(/<[^>]+>/g," ").slice(0,70))+'</div></button>'}).join("");
  var n=Object.keys(resp).length;
  $("cnt").textContent=n+" de "+emails.length+" analisados";$("mfin").hidden=n<emails.length;
}
function abrirEmail(i){
  aberto=i;var e=emails[i],f=resp[i];
  var h='<button class="mback" id="mback">← Caixa de entrada</button>'+(e.ext?'<div class="extaviso" role="note">'+AVISO_EXT+'</div>':'')+'<h3>'+e.assunto+'</h3>'+
   '<div class="rem"><div class="av">'+e.nome[0]+'</div><div><div class="nm">'+e.nome+'</div><button class="dt" id="dt">Detalhes</button></div></div>'+
   '<div class="det" id="det"><b>De:</b> '+e.nome+' &lt;'+e.end+'&gt;<br><b>Para:</b> '+(e.para==="Você"?meuEmail():e.para)+'<br><b>Hora:</b> hoje, '+e.hora+'</div>'+
   '<div class="corpo">'+e.corpo+'</div>'+(e.anexo?'<button class="anx" data-anx="1"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11l-8 8a5 5 0 01-7-7l8-8a3.5 3.5 0 015 5l-8 8a2 2 0 01-3-3l7-7"/></svg> '+e.anexo+'</button>':'');
  if(f===undefined){
    h+='<div class="acoes2"><button class="b2 seg" data-r="seg">Parece seguro</button><button class="b2 sus" data-r="sus">Reportar como suspeito</button></div>';
  }else{
    var ok=(f==="sus")===e.fish,parc=(f==="sus"&&!e.fish),cai=(f==="caiu");
    if(parc){
      h+='<div class="fb parc"><h4>Obrigado pelo cuidado</h4>A Segurança analisou: este e-mail era <b>legítimo</b>. Na dúvida, reportar é sempre melhor do que arriscar.<h4 style="margin-top:12px">Como saber da próxima vez</h4><ul>'+e.pistas.map(function(x){return "<li>"+x+"</li>"}).join("")+'</ul><span class="pt">+5 pontos · acerto parcial</span></div>';
    }else{
      var tit=ok?'Muito bem! Você acertou.':(cai?'Este e-mail era um golpe. Veja as pistas para reconhecer da próxima vez.':'Quase! Vamos ver o que passou.');
      h+='<div class="fb '+(ok?'ok':'no')+'"><h4>'+tit+'</h4>'+(cai?'':(e.fish?'Este e-mail era <b>phishing</b>. ':'Este e-mail era <b>legítimo</b>. ')+'Veja as pistas:')+'<ul>'+e.pistas.map(function(x){return "<li>"+x+"</li>"}).join("")+'</ul>'+(ok?'<span class="pt">+10 pontos</span>':'')+'</div>';
    }
  }
  $("mread").innerHTML=h;$("mread").scrollTop=0;$("mw").classList.add("lendo");renderLista();
}
$("mfin").addEventListener("click",function(){iniciarSocial()});
$("mlist").addEventListener("click",function(ev){var b=ev.target.closest(".mi");if(b)abrirEmail(+b.dataset.i)});
$("mread").addEventListener("click",function(ev){
  var el=ev.target;
  if(el.id==="mback"){$("mw").classList.remove("lendo");return}
  if(el.id==="dt"){$("det").classList.toggle("on");return}
  if(el.id==="verRes"){iniciarSocial();return}
  var a=el.closest("a[data-u]");
  if(el.closest(".anx")){caiu("anexo");return}
  if(a){ev.preventDefault();if(emails[aberto].fish){caiu("link");return}$("mstat").innerHTML="Endereço do link: <b>"+a.dataset.u+"</b> (link bloqueado nesta simulação)";return}
  var r=el.dataset&&el.dataset.r;
  if(r){resp[aberto]=r;if((r==="sus")===emails[aberto].fish)pontos+=10;else if(r==="sus")pontos+=5;abrirEmail(aberto)}
});
$("mread").addEventListener("mouseover",function(ev){var a=ev.target.closest("a[data-u]");if(a)$("mstat").innerHTML="Endereço do link: <b>"+a.dataset.u+"</b>"});
$("mread").addEventListener("mouseout",function(ev){if(ev.target.closest("a[data-u]"))$("mstat").textContent="Passe o mouse ou toque em um link para ver o endereço."});
var SV='<svg viewBox="0 0 24 24" width="84" height="84" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
var ICS={escudo:SV+'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',lupa:SV+'<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/></svg>',bussola:SV+'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>'};
function mostrarRes(){mod1Done=true;atualizaModulos();
  var max=emails.length*10,s,ic,tx;
  if(pontos>=50){s="Caçador de Phishing";ic=ICS.escudo;tx="Você enxerga os sinais com clareza. Os golpes do Hacker Apagão não passam por você."}
  else if(pontos>=30){s="Olhar Atento";ic=ICS.lupa;tx="Você já percebe boa parte das armadilhas. Revise os e-mails para fechar as pistas que faltaram."}
  else{s="Em Treinamento";ic=ICS.bussola;tx="Cada erro mostrou um sinal novo. Revise os e-mails e use as pistas para olhar de novo."}
  $("seloIc").innerHTML=ic;$("seloNm").textContent=s;$("rPts").textContent=bonus>0?(pontos+bonus)+" pontos · "+bonus+" de bônus por reportar o próprio erro":pontos+" de "+max+" pontos";$("rRapido").hidden=!bonus;$("rTxt").textContent=tx;enviarResultado(s);tela("resultado");
}
var quedaTipo="";
function caiu(tipo){quedas++;quedaTipo=tipo;
  if(resp[aberto]===undefined)resp[aberto]="caiu";
  $("cTit").textContent=tipo==="link"?"Você clicou em um link falso":"Você abriu um arquivo malicioso";
  $("cTxt").textContent=tipo==="link"?"Numa situação real, uma página idêntica à da empresa poderia ter roubado sua senha e seus dados.":"Numa situação real, um programa poderia ter sido instalado e dado ao Hacker Apagão acesso ao seu computador.";
  $("oFechar").textContent=tipo==="link"?"Fecho a página e sigo trabalhando":"Fecho o arquivo e sigo trabalhando";
  $("cEscolha").hidden=false;$("cAcon").hidden=false;$("cOk").hidden=true;$("cFb").textContent="";
  Array.prototype.forEach.call(document.querySelectorAll("#caiu .opcb"),function(b){b.disabled=false});
  $("caiu").classList.add("on");$("oFechar").focus();
}
$("caiu").addEventListener("click",function(ev){
  var b=ev.target.closest(".opcb");if(!b||b.disabled)return;
  var o=b.dataset.o;
  if(o==="fechar"||o==="apagar"){
    b.disabled=true;
    $("cFb").textContent=o==="fechar"
      ?"Fechar não desfaz o que já foi aberto. Para isolar o risco, a Segurança precisa saber agora. Qual das outras opções ajuda mais?"
      :"Apagar o e-mail não remove o problema e esconde o alerta de quem poderia ajudar. Se ninguém souber, o golpe pode chegar aos seus colegas. Qual das outras opções ajuda mais?";
    return;
  }
  var novo=!reportado[aberto];
  if(novo){reportado[aberto]=true;bonus+=15}
  $("cTit").textContent="Boa decisão. Obrigado por avisar";
  $("cTxt").textContent="A Segurança foi acionada e pode isolar o risco antes que ele se espalhe. Quanto mais rápido o aviso, menor o estrago.";
  $("cRec").textContent=novo?"+15 pontos · selo “Reportou rápido”":"Você já ganhou os pontos por reportar este e-mail.";
  $("cEscolha").hidden=true;$("cAcon").hidden=true;$("cOk").hidden=false;$("cSeguir").focus();
});
$("cSeguir").addEventListener("click",function(){
  $("caiu").classList.remove("on");abrirEmail(aberto);
});
function irEscritorio(){tela("escritorio");var v=$("vista");v.scrollLeft=v.scrollWidth}
$("iniciar").addEventListener("click",function(){tela("proposta")});
$("entrar").addEventListener("click",function(){tela("modulos")});
$("mod1").addEventListener("click",irEscritorio);
$("tela").addEventListener("click",function(){tela("licao")});
$("abrirCaixa").addEventListener("click",function(){
  $("meuAv").src=pessoas[atual].foto;$("meuAv").alt=pessoas[atual].nome;
  renderLista();$("mw").classList.remove("lendo");tela("correio");
});
$("rev").addEventListener("click",function(){tela("correio")});
$("rIni").addEventListener("click",function(){socialFeito=false;soEsc=[];enviado=false;quedas=0;resp={};pontos=0;bonus=0;reportado={};aberto=-1;$("mread").innerHTML='<p class="vazio">Selecione um e-mail para ler.</p>';tela("inicio")});


/* ===== Engenharia social: mensagem no WhatsApp ===== */
var socialFeito=false,soEsc=[];
$("social").style.backgroundImage="linear-gradient(rgba(0,0,50,.84),rgba(0,0,50,.93)),url("+fundo+")";
var CONTATOS=[{n:"Gestor",c:"Contato salvo",t:"98 9999-1111",v:true},{n:"Recursos Humanos",c:"Setor",t:"98 9999-2222"},{n:"Suporte de TI",c:"Atendimento interno",t:"98 9999-3333"}];
function norm(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}
function psTela(id,dica){document.querySelectorAll(".ps").forEach(function(x){x.classList.remove("on")});$(id).classList.add("on");$("soDica").textContent=dica}
function iniciarSocial(){
  if(socialFeito){mostrarRes();return}
  $("soIntro").hidden=false;$("soFone").hidden=true;$("soFim").hidden=true;tela("social");
}
$("soGo").addEventListener("click",function(){
  var foto=atual===1?fotos[2]:fotos[1];
  document.querySelectorAll(".gf").forEach(function(i){i.src=foto});
  soEsc=[];$("waFb").textContent="";Array.prototype.forEach.call(document.querySelectorAll("#waOpts button"),function(x){x.disabled=false});$("msgs").innerHTML="";$("notifs").innerHTML="";$("buscaNome").value="";$("buscaRes").innerHTML='<p class="vz">Digite <b>gestor</b> para buscar o contato.</p>';
  $("msgTxt").value="Oi! Foi você que me pediu um código por WhatsApp agora há pouco?";$("msgTxt").disabled=false;
  $("soIntro").hidden=true;$("soFone").hidden=false;$("soFim").hidden=true;
  psTela("psLock","Seu celular recebeu notificações. Toque na mensagem do WhatsApp para abrir.");
  setTimeout(function(){$("notifs").insertAdjacentHTML("beforeend",'<button class="nt" id="ntWa"><b>WhatsApp</b><small>agora</small><div>98 9999-7777: Oi! Preciso de um favor urgente</div></button>')},1000);
  setTimeout(function(){$("notifs").insertAdjacentHTML("beforeend",'<div class="nt"><b>Mensagens</b><small>agora</small><div>Seu código de verificação do WhatsApp é 482-915. Não compartilhe este código com ninguém.</div></div>')},2200);
});
$("notifs").addEventListener("click",function(ev){if(ev.target.closest("#ntWa"))psTela("psC1","Um número que não está nos seus contatos acabou de escrever. Decida o que fazer.")});
var WA_FB={
  mandar:"Esse código dá acesso à sua conta de WhatsApp. Com ele, o golpista assume suas conversas e aplica o golpe nos seus contatos.",
  bloquear:"Você se protegeu, mas ninguém foi avisado: o golpista segue tentando com seus colegas. E se fosse mesmo o seu gestor? Há uma opção que resolve os dois casos.",
  perguntar:"Parece esperto, mas o golpista pode achar a resposta na internet ou improvisar. Você continua num canal que não é confiável, e o código já está no seu celular."
};
$("waOpts").addEventListener("click",function(ev){
  var b=ev.target.closest("button");if(!b||b.disabled)return;
  var o=b.dataset.o;soEsc.push(o);
  if(o==="confirmar"){
    $("waFb").textContent="";
    psTela("psBusca","Você decidiu confirmar por um canal conhecido. Digite GESTOR na busca para achar o contato que já está salvo.");$("buscaNome").focus();return;
  }
  b.disabled=true;$("waFb").textContent=WA_FB[o];$("waFb").scrollTop=0;
});
$("buscaNome").addEventListener("input",function(){
  var q=norm(this.value),h;
  if(q.length<2)h='<p class="vz">Digite <b>gestor</b> para buscar o contato.</p>';
  else{
    var r=CONTATOS.map(function(c,i){return{c:c,i:i}}).filter(function(x){return norm(x.c.n).indexOf(q)>-1||norm(x.c.c).indexOf(q)>-1});
    h=r.length?r.map(function(x){return '<button class="ct" data-i="'+x.i+'"><b>'+x.c.n+'</b><small>'+x.c.c+' &middot; '+x.c.t+'</small>'+(x.c.v?'<span class="ok"><svg class="vf" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 1.8 3-.2 1 2.8 2.5 1.7-.9 2.9.9 2.9-2.5 1.7-1 2.8-3-.2L12 22l-2.4-1.8-3 .2-1-2.8-2.5-1.7.9-2.9-.9-2.9 2.5-1.7 1-2.8 3 .2z"/><path d="M8.5 12.2l2.4 2.4 4.6-4.8" fill="none" stroke="#0b141a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Contato verificado e já salvo</span>':'')+'</button>'}).join(""):'<p class="vz">Nenhum contato encontrado.</p>';
  }
  $("buscaRes").innerHTML=h;
});
$("buscaRes").addEventListener("click",function(ev){
  var b=ev.target.closest(".ct");if(!b)return;
  if(CONTATOS[+b.dataset.i].v)psTela("psC2","Você achou o contato salvo. Envie uma mensagem perguntando se foi ele quem pediu o código.");
  else $("soDica").textContent="Esse não é o seu gestor. Digite GESTOR na busca para achar o contato certo.";
});
function bolha(txt,out,extra){var d=document.createElement("div");d.className="bb"+(out?" out":"");d.innerHTML=txt+(extra||"");$("msgs").appendChild(d);$("msgs").scrollTop=$("msgs").scrollHeight;return d}
var TK='<svg class="tk" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13l4 4 9-10"/><path d="M10 15l1.5 1.5L21 7"/></svg>';
function enviarMsg(){
  var v=$("msgTxt").value.trim();if(v.length<3||$("msgTxt").disabled)return;
  $("msgTxt").disabled=true;
  var esc=v.replace(/[&<>]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;"}[c]});
  var b=bolha(esc,true,'<small>10:28 '+TK+'</small>');
  setTimeout(function(){b.querySelector(".tk").classList.add("az");$("soDica").textContent="Mensagem visualizada. Aguarde a resposta."},1100);
  var dg;
  setTimeout(function(){dg=document.createElement("div");dg.className="dg";dg.setAttribute("aria-label","digitando");dg.innerHTML="<i></i><i></i><i></i>";$("msgs").appendChild(dg);$("msgs").scrollTop=$("msgs").scrollHeight},2000);
  setTimeout(function(){if(dg)dg.remove();bolha("Não fui eu!! Parabéns pelo reporte, colega",false,"<small>10:29</small>");socialFeito=true;$("soDica").textContent="Você confirmou por um canal conhecido e evitou o golpe."},4400);
  setTimeout(function(){$("soFim").hidden=false;$("soFim").scrollIntoView({behavior:"smooth",block:"center"})},5600);
}
$("msgEnv").addEventListener("click",enviarMsg);
$("msgTxt").addEventListener("keydown",function(e){if(e.key==="Enter")enviarMsg()});
$("soRes").addEventListener("click",function(){mostrarRes()});

/* ===== Módulo 2: senhas e posto de trabalho ===== */
var colegaImg="assets/img/colega.webp";
var mod1Done=false,mod2Done=false,m2={erros:0,errL:false,errA:false,escolhas:[],enviado:false};
function embaralha(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function atualizaModulos(){
  if(mod1Done){var c=$("mod2");c.disabled=false;c.classList.remove("lock");c.classList.add("on");c.removeAttribute("aria-disabled");$("ms2").textContent=mod2Done?"Concluído":"Disponível";document.querySelector("#mod1 .ms").textContent="Concluído"}
}
$("rProx").addEventListener("click",function(){tela("modulos")});
$("mod2").addEventListener("click",function(){if(!$("mod2").disabled)tela("licao2")});
$("stage2").style.backgroundImage="url("+fundo+")";
document.querySelectorAll("#stage2 .ocl").forEach(function(o){o.style.backgroundImage="url("+fundo+")"});
$("colega").src=colegaImg;
var NOME_COL="Rafael";
function fala(q,txt){
  var c=(q===NOME_COL),v=(q==="Você");$("balC").hidden=true;$("balV").hidden=true;
  if(c||v){var el=c?$("balC"):$("balV");$(c?"balCt":"balVt").textContent=txt;el.hidden=false;el.classList.remove("pop");void el.offsetWidth;el.classList.add("pop")}
}
function opcoes(l){$("dOpts").innerHTML=l.map(function(o){return '<button class="opt" data-k="'+o.k+'">'+o.t+'</button>'}).join("")}
function aviso2(tit,txt){$("e2Tit").textContent=tit;$("e2Txt").textContent=txt;$("erro2").classList.add("on");$("e2Ok").focus()}
$("e2Ok").addEventListener("click",function(){$("erro2").classList.remove("on")});
function verEsquerda(){var v=$("vista2"),w=$("stage2").offsetWidth;v.scrollLeft=Math.max(0,w*0.47-v.clientWidth/2)}
function irParaMonitor(){var v=$("vista2");v.scrollTo({left:v.scrollWidth,behavior:"smooth"})}
$("m2Go").addEventListener("click",function(){
  m2={erros:0,errL:false,errA:false,escolhas:[],enviado:false};
  $("toff").classList.remove("on");$("hot2").hidden=true;$("m2Fim").hidden=true;$("dFb").hidden=true;
  $("colega").hidden=true;opcoes([]);fala("","");
  $("dica2").textContent="Um colega se aproxima da sua mesa.";
  tela("escritorio2");verEsquerda();
  setTimeout(function(){
    $("colega").hidden=false;
    fala(NOME_COL,"Meu acesso não foi liberado e a demanda vence hoje. Pode me emprestar seu login?");
    $("dica2").textContent="Como você responde?";
    opcoes(embaralha([{k:"emprestar",t:"Empresto e troco a senha depois"},{k:"lado",t:"Faço login e fico do lado dele"},{k:"demanda",t:"Faço a demanda por ele no meu usuário"},{k:"chamado",t:"Abro chamado urgente e aviso o gestor"}]));
  },900);
});
var M2_FB={
  emprestar:["Trocar a senha depois não desfaz o que foi feito","Enquanto o Rafael estiver com o seu login, tudo o que ele fizer ficará registrado em seu nome. E a senha pode ter sido vista, anotada ou copiada. Login é pessoal e intransferível."],
  lado:["Você continua cedendo a sua identidade","Mesmo ao lado dele, as ações saem como se fossem suas e ficam registradas no seu nome. O acesso do Rafael precisa ser do Rafael, liberado pelo caminho oficial."],
  demanda:["Você contorna o controle de acesso","Se o Rafael não tem permissão, o trabalho dele passa a correr pelo seu usuário, sem aprovação e sem registro de quem pediu. O problema de acesso continua sem solução."]
};
$("dOpts").addEventListener("click",function(ev){
  var b=ev.target.closest(".opt");if(!b)return;var k=b.dataset.k;
  if(M2_FB[k]){
    m2.escolhas.push(k);
    if(!m2.errL){m2.errL=true;m2.erros++}
    b.disabled=true;
    aviso2(M2_FB[k][0],M2_FB[k][1]);
  }else if(k==="chamado"){
    m2.escolhas.push(k);
    var txt=b.textContent;opcoes([]);fala("Você",txt);
    setTimeout(function(){fala(NOME_COL,"Ah, claro. Tem razão");$("dFb").hidden=false;$("dFb").textContent="Certo! Seu login é só seu. O chamado urgente libera o acesso pelo caminho oficial, e avisar o gestor ajuda a resolver o prazo."},1500);
    setTimeout(function(){$("dFb").hidden=true;fala(NOME_COL,"Já está livre pro almoço?");opcoes([{k:"sim",t:"Sim"}])},3600);
  }else if(k==="sim"){
    opcoes([]);fala("Você","Sim");
    setTimeout(function(){
      fala(NOME_COL,"Hm... acho que você esqueceu alguma coisa");
      $("dica2").textContent="Algo ficou para trás. A tela do seu computador está piscando: clique nela.";
      $("hot2").hidden=false;irParaMonitor();
      opcoes([{k:"almoco",t:"Ir almoçar"}]);
    },1300);
  }else if(k==="almoco"){
    m2.escolhas.push(k);
    if(!m2.errA){m2.errA=true;m2.erros++}
    aviso2("Computador ligado!","Você saiu e deixou a tela ligada e desbloqueada. Qualquer pessoa que passasse poderia usar o seu login e ver os seus dados. Volte e proteja o seu posto antes de sair.");
  }
});
$("hot2").addEventListener("click",function(){
  $("hot2").hidden=true;$("toff").classList.add("on");opcoes([]);
  $("dica2").textContent="Tela desligada.";
  fala(NOME_COL,"Agora sim! Vamos almoçar?");
  setTimeout(function(){$("m2Fim").hidden=false;$("m2Fim").scrollIntoView({behavior:"smooth",block:"center"})},1400);
});
function enviarM2(){
  if(m2.enviado)return;m2.enviado=true;
  var er=m2.erros,d={nome:jogador,setor:setor,modulo:"Módulo 2: Senhas e posto de trabalho",acertos:Math.max(0,2-er),erros:er,pontos:Math.max(0,20-10*er),selo:"Posto Seguro",quedas:er,escolhas:m2.escolhas.join(">"),dataHora:new Date().toISOString()};
  if(!sheetsAtivo()){console.warn("Google Sheets não configurado. Resultado:",d);return}
  postar(d).then(reenviarFila).catch(function(){gravarFila(lerFila().concat([d]))});
}
$("m2Done").addEventListener("click",function(){
  mod2Done=true;atualizaModulos();enviarM2();
  var er=m2.erros;
  $("selo2").innerHTML=ICS.escudo;
  $("r2Pts").textContent=Math.max(0,20-10*er)+" de 20 pontos";
  $("r2Txt").textContent=er===0?"Você protegeu o seu login e o seu posto de trabalho de primeira.":"Cada tentativa mostrou um cuidado novo. Agora você sabe: login é pessoal e o computador deve ficar bloqueado quando você sai.";
  tela("resultado2");
});
$("r2Mod").addEventListener("click",function(){tela("modulos")});
$("r2Ini").addEventListener("click",function(){tela("inicio")});
