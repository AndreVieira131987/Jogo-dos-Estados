estados_e_capitais = {
    'São Paulo': 'São Paulo',
    'Rio de Janeiro': 'Rio de Janeiro',
    'Minas Gerais': 'Belo Horizonte',
    'Espírito Santo': 'Vitória',
    'Paraná': 'Curitiba',
    'Santa Catarina': 'Florianópolis',
    'Rio Grande do Sul': 'Porto Alegre',
    'Bahia': 'Salvador',
    'Pernambuco': 'Recife',
    'Ceará': 'Fortaleza',
    'Rio Grande do Norte': 'Natal',
    'Paraíba': 'João Pessoa',
    'Alagoas': 'Maceió',
    'Sergipe': 'Aracaju',
    'Amazonas': 'Manaus',
    'Pará': 'Belém',
    'Amapá': 'Macapá',
    'Rondônia': 'Porto Velho',
    'Acre': 'Rio Branco',
    'Roraima': 'Boa Vista',
    'Mato Grosso': 'Cuiabá',
    'Mato Grosso do Sul': 'Campo Grande',
    'Goiás': 'Goiânia',
    'Distrito Federal': 'Brasília'
}

quer_continuar = True
rodadas = 0
acertos = 0

for estado, capital in estados_e_capitais.items():
    if not quer_continuar:
        break
    rodadas += 1
    print(f'Qual é a capital de {estado}?')
    resposta = input('Sua resposta: ')
    if resposta.lower() == capital.lower():
        print('Resposta Correta!')
        acertos += 1
    else:
        print(f'Resposta Errada! A capital de {estado} é {capital}')

    while True:
        opcao = input('Deseja continuar? (s/n)').lower()
        if opcao not in ['s', 'n']:
            print ('Responda apenas com "s" para sim ou "n" para não.')
            continue
        elif opcao == 'n':
            quer_continuar = False
        break

porc = (acertos / rodadas) * 100

print(f'Você acertou {acertos} de {rodadas} perguntas')
print(f'Sua porcentagem de acerto é {porc:.2f}%')

