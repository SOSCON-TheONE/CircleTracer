function openFileSelector(flag) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'text/plain';
    input.onchange = (event) => {
        processFile(event.target.files[0], flag);
    };
    input.click();
}

function processFile(file, flag) {
    const reader = new FileReader();
    reader.onload = () => {
        const data = JSON.parse(reader.result);
        processData(data.displayTimeUnit, data.traceEvents, flag);
    };
    reader.readAsText(file, 'euc-kr');
}

function processData(timeUnit, traceEvents, flag) {
    traceEvents.forEach((elem) => {
        if (elem.args !== undefined && elem.args.origin !== undefined) {
            let origins = elem.args.origin.split(',');
            let size = origins.length;
            origins.forEach((origin) => {
                let nodeId = origin.split(':')[0];
                let nodeName = origin.split(':')[1];

                if (durCircleJson[nodeId] !== undefined && nodeName !== 'Unknown') {
                    if (durCircleJson[nodeId].duration === undefined) {
                        durCircleJson[nodeId].duration = { timeUnit: timeUnit, dur1: 0, dur2: 0 };
                    }

                    if (flag === '1') {
                        durCircleJson[nodeId].duration.dur1 += elem.dur / size;
                    } else {
                        durCircleJson[nodeId].duration.dur2 += elem.dur / size;
                    }
                }
            });
        }
    });

    console.log(durCircleJson);
}