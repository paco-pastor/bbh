from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/set", methods=["POST"])
def set():
    data = request.json
    data_status = verify_request(data)
    if data_status["validity"] is False:
        return data_status["message"], data_status["code"]
    db, id, value = data["db"], data["id"], data["value"]
    return "", 200

def verify_request(json_data):
    for key in ("db", "id", "value"):
        if key not in json_data.keys():
            return {"validity":False, "code":500, "body":f"Please specify {key}"}
    return {"validity":True,"code":200,"body":""}


if __name__ == '__main__':
    app.run(debug=True)