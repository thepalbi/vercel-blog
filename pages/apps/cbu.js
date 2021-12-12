import { useState } from "react";
import App from "../../containers/App";
import { split } from "../../lib/apps/cbu";

export default function CBUInspectorApp() {
    const [rawCBU, setRawCBU] = useState("");

    let inputCBUState;
    let parts = [];
    if (rawCBU == "") {
        inputCBUState = "Ingresar CBU";
    } else if (rawCBU.length < 22) {
        inputCBUState = "El CBU debe tener 22 caracteres";
    } else {
        inputCBUState = rawCBU;
        parts = split(rawCBU);
    }

    return (
        <App>
            <div className="card" style={{ width: 300 }}>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">CBU</span>
                    </div>
                    <input
                        onChange={e => setRawCBU(e.target.value)}
                        maxLength={22}
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h3>CBU Inspector</h3>
                    </div>
                    <div className="card-text">
                        <p>{inputCBUState}</p>
                        {
                            parts.map(part => {
                                return <p>{part.name}: {part.value}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </App>
    );
}