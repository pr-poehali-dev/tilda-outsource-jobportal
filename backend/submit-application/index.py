import json
import os

def handler(event: dict, context) -> dict:
    """Сохраняет заявку соискателя (имя, телефон, город) в базу данных."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    city = body.get('city', '').strip()
    vacancy = body.get('vacancy', '').strip()

    if not name or not phone or not city:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните все обязательные поля'}, ensure_ascii=False)
        }

    import psycopg2
    dsn = os.environ['DATABASE_URL']
    if '?' not in dsn:
        dsn += '?sslmode=disable'
    else:
        dsn += '&sslmode=disable'

    conn = psycopg2.connect(dsn)
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO applications (name, phone, city, vacancy) VALUES (%s, %s, %s, %s) RETURNING id",
        (name, phone, city, vacancy)
    )
    app_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'id': app_id})
    }
