const { Router } = require('express')

const upload = require('./middleware/upload-middleware');

const UserController = require('./controller/UserController')
const UnidadeController = require('./controller/UnidadeController')
const AgendaController = require('./controller/AgendaController')
const CidadeController = require('./controller/CidadeController')
const ClinicaController = require('./controller/ClinicaController')
const ContasPagarController = require('./controller/ContasPagarController')
const ContasReceberController = require('./controller/ContasReceberController')
const ConveniosController = require('./controller/ConveniosController')
const DespesasController = require('./controller/DespesasController')
const DoencasController = require('./controller/DoencasController')
const EspecialidadesController = require('./controller/EspecialidadesController')
const EstadosController = require('./controller/EstadosController')
const EstoquesController = require('./controller/EstoquesController')
const FormasPagamentoController = require('./controller/FormasPagamentoController')
const FornecedoresController = require('./controller/FornecedoresController')
const ImagensTratamentoController = require('./controller/ImagensTratamentoController') 
const ItensDespesasController = require('./controller/ItensDespesasController')
const ItensOrcamentoController = require('./controller/ItensOrcamentoController')
const MedicamentosController = require('./controller/MedicamentosController')
const OrcamentosController = require('./controller/OrcamentosController')
const PacientesController = require('./controller/PacientesController')
const PerfisController = require('./controller/PerfisController')
const Plano_PagamentoController = require('./controller/Plano_PagamentoController')
const Planos_ContaController = require('./controller/Planos_ContaController')
const ProcedimentosController = require('./controller/ProcedimentosController')
const ProntuarioController = require('./controller/ProntuarioController')
const Prontuario_TratamentoController = require('./controller/Prontuario_TratamentoController')
const ProtesesController = require('./controller/ProtesesController')
const Questoes_AnamneseController = require('./controller/Questoes_AnamneseController')
const RecibosController = require('./controller/RecibosController')
// const RetornosController = require('./controller/ RetornosController')
// const Retornos_PacienteController = require('./controller/etornos_PacienteController')
const SegmentosController = require('./controller/SegmentosController')
const Situacoes_AgendaController = require('./controller/Situacoes_AgendaController')
const Tipo_AgendamentoController = require('./controller/Tipo_AgendamentoController')
const TratamentosController = require('./controller/TratamentosController')
const fileUploadController= require('./controller/upload-controller');

const router = Router()

router.post('/usuarios', UserController.craete)
router.put('/usuarios/:id', UserController.update)
router.get('/usuarios', UserController.list)
router.delete('/usuarios/:id', UserController.delete)

router.post('/unidades', UnidadeController.create)
router.put('/unidades/:id', UnidadeController.update)
router.get('/unidades', UnidadeController.list)
router.delete('/unidades/:id', UnidadeController.delete)

router.post('/agendas', AgendaController.create)
router.put('/agendas/:id', AgendaController.update)
router.get('/agendas', AgendaController.list)
router.delete('/agendas/:id', AgendaController.delete)

router.post('/cidades', CidadeController.create)
router.put('/cidades/:id', CidadeController.update)
router.get('/cidades', CidadeController.list)
router.delete('/cidades/:id', CidadeController.delete)

router.post('/clinica', ClinicaController.create)
router.put('/clinica/:id', ClinicaController.update)
router.get('/clinica', ClinicaController.list)
router.delete('/clinica/:id', ClinicaController.delete)

router.post('/contas_pagar', ContasPagarController.create)
router.put('/contas_pagar/:id', ContasPagarController.update)
router.get('/contas_pagar', ContasPagarController.list)
router.delete('/contas_pagar/:id', ContasPagarController.delete)

router.post('/contas_receber', ContasReceberController.create)
router.put('/contas_receber/:id', ContasReceberController.update)
router.get('/contas_receber', ContasReceberController.list)
router.delete('/contas_receber/:id', ContasReceberController.delete)

router.post('/convenios', ConveniosController.create)
router.put('/convenios/:id', ConveniosController.update)
router.get('/convenios', ConveniosController.list)
router.delete('/convenios/:id', ConveniosController.delete)

router.post('/despesas', DespesasController.create)
router.put('/despesas/:id', DespesasController.update)
router.get('/despesas', DespesasController.list)
router.delete('/despesas/:id', DespesasController.delete)

router.post('/doencas', DoencasController.create)
router.put('/doencas/:id', DoencasController.update)
router.get('/doencas', DoencasController.list)
router.delete('/doencas/:id', DoencasController.delete)

router.post('/especialidades',EspecialidadesController.create)
router.put('/especialidades/:id',EspecialidadesController.update)
router.get('/especialidades',EspecialidadesController.list)
router.delete('/especialidades/:id',EspecialidadesController.delete)

router.post('/estados',EstadosController.create)
router.put('/estados/:id',EstadosController.update)
router.get('/estados',EstadosController.list)
router.delete('/estados/:id',EstadosController.delete)

router.post('/estoques',EstoquesController.create)
router.put('/estoques/:id',EstoquesController.update)
router.get('/estoques',EstoquesController.list)
router.delete('/estoques/:id',EstoquesController.delete)

router.post('/formas_pagamento',FormasPagamentoController.create)
router.put('/formas_pagamento/:id',FormasPagamentoController.update)
router.get('/formas_pagamento',FormasPagamentoController.list)
router.delete('/formas_pagamento/:id',FormasPagamentoController.delete)

router.post('/fornecedores',FornecedoresController.create)
router.put('/fornecedores/:id',FornecedoresController.update)
router.get('/fornecedores',FornecedoresController.list)
router.delete('/fornecedores/:id',FornecedoresController.delete)

router.post('/imagenstratamento',ImagensTratamentoController.create)
router.put('/imagenstratamento/:id',ImagensTratamentoController.update)
router.get('/imagenstratamento',ImagensTratamentoController.list)
router.delete('/imagenstratamento/:id',ImagensTratamentoController.delete)

router.post('/itens_despesas',ItensDespesasController.create)
router.put('/itens_despesas/:id',ItensDespesasController.update)
router.get('/itens_despesas',ItensDespesasController.list)
router.delete('/itens_despesas/:id',ItensDespesasController.delete)

router.post('/itens_orcamento',ItensOrcamentoController.create)
router.put('/itens_orcamento/:id',ItensOrcamentoController.update)
router.get('/itens_orcamento',ItensOrcamentoController.list)
router.delete('/itens_orcamento/:id',ItensOrcamentoController.delete)

router.post('/medicamentos',MedicamentosController.create)
router.put('/medicamentos/:id',MedicamentosController.update)
router.get('/medicamentos',MedicamentosController.list)
router.delete('/medicamentos/:id',MedicamentosController.delete)

router.post('/orcamentos',OrcamentosController.create)
router.put('/orcamentos/:id',OrcamentosController.update)
router.get('/orcamentos',OrcamentosController.list)
router.delete('/orcamentos/:id',OrcamentosController.delete)
router.get('/orcamentos/:cod_paciente',OrcamentosController.find)

router.post('/pacientes',PacientesController.create)
router.put('/pacientes/:id',PacientesController.update)
router.get('/pacientes',PacientesController.list)
router.delete('/pacientes/:id',PacientesController.delete)
router.get('/pacientes/:id',PacientesController.find)

router.post('/perfis',PerfisController.create)
router.put('/perfis/:id',PerfisController.update)
router.get('/perfis',PerfisController.list)
router.delete('/perfis/:id',PerfisController.delete)

router.post('/plano_pagamento',Plano_PagamentoController.create)
router.put('/plano_pagamento/:id',Plano_PagamentoController.update)
router.get('/plano_pagamento',Plano_PagamentoController.list)
router.delete('/plano_pagamento/:id',Plano_PagamentoController.delete)

router.post('/planos_conta',Planos_ContaController.create)
router.put('/planos_conta/:id',Planos_ContaController.update)
router.get('/planos_conta',Planos_ContaController.list)
router.delete('/planos_conta/:id',Planos_ContaController.delete)

router.post('/procedimentos',ProcedimentosController.create)
router.put('/procedimentos/:id',ProcedimentosController.update)
router.get('/procedimentos',ProcedimentosController.list)
router.delete('/procedimentos/:id',ProcedimentosController.delete)

router.post('/prontuario',ProntuarioController.create)
router.put('/prontuario/:id',ProntuarioController.update)
router.get('/prontuario',ProntuarioController.list)
router.delete('/prontuario/:id',ProntuarioController.delete)

router.post('/prontuario_tratamento',Prontuario_TratamentoController.create)
router.put('/prontuario_tratamento/:id',Prontuario_TratamentoController.update)
router.get('/prontuario_tratamento',Prontuario_TratamentoController.list)
router.delete('/prontuario_tratamento/:id',Prontuario_TratamentoController.delete)

router.post('/proteses',ProtesesController.create)
router.put('/proteses/:id',ProtesesController.update)
router.get('/proteses',ProtesesController.list)
router.delete('/proteses/:id',ProtesesController.delete)

router.post('/questoes_anamnese', Questoes_AnamneseController.create)
router.put('/questoes_anamnese/:id', Questoes_AnamneseController.update)
router.get('/questoes_anamnese', Questoes_AnamneseController.list)
router.delete('/questoes_anamnese/:id', Questoes_AnamneseController.delete)

router.post('/recibos',RecibosController.create)
router.put('/recibos/:id',RecibosController.update)
router.get('/recibos', RecibosController.list)
router.delete('/recibos/:id',RecibosController.delete)

// router.post('/retornos',RetornosController.create)
// router.put('/retornos/:id',RetornosController
// router.get('/retornos',RetornosController.list)
// router.delete('/retornos/:id',RetornosController.delete)

// router.post('/retornos_paciente',Retornos_PacienteController.create)
// router.put('/retornos_paciente/:id',Retornos_PacienteController.update)
// router.get('/retornos_paciente', Retornos_PacienteController.list)
// router.delete('/retornos_paciente/:id', Retornos_PacienteController.delete)

router.post('/segmentos',SegmentosController.create)
router.put('/segmentos/:id',SegmentosController.update)
router.get('/segmentos',SegmentosController.list)
router.delete('/segmentos/:id',SegmentosController.delete)

router.post('/situacoes_agenda',Situacoes_AgendaController.create)
router.put('/situacoes_agenda/:id',Situacoes_AgendaController.update)
router.get('/situacoes_agenda',Situacoes_AgendaController.list)
router.delete('/situacoes_agenda/:id',Situacoes_AgendaController.delete)

router.post('/tipo_agendamento',Tipo_AgendamentoController.create)
router.put('/tipo_agendamento/:id',Tipo_AgendamentoController.update)
router.get('/tipo_agendamento',Tipo_AgendamentoController.list)
router.delete('/tipo_agendamento/:id',Tipo_AgendamentoController.delete)

router.post('/tratamentos',TratamentosController.create)
router.put('/tratamentos/:id',TratamentosController.update)
router.get('/tratamentos',TratamentosController.list)
router.delete('/tratamentos/:id',TratamentosController.delete)
router.get('/tratamentos/:cod_paciente',TratamentosController.find)

router.post('/upload-single', upload.single('file'), fileUploadController.uploadSingle);

module.exports = router
