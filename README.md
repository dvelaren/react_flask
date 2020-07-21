# React + Flask

This project combines React with Flask (api) and uses React-Bootstrap and React-Google-Maps

## Requirements
- Node 14.5.0
- Python 3.7

## Setup

### Backend

1. Navigate to api folder

    ```sh
    cd api
    ```

2. Create a python virtual env

    For Linux bash
    ```sh
    python3 -m venv env
    ```

    For Windows Powershell
    ```sh
    py -m venv env
    ```

3. Activate virtual env

    For Linux bash
    ```sh
    source env/bin/activate
    ```
    For Windows Powershell
    ```sh
    .\env\Scripts\Activate.ps1
    ```

4. Upgrade pip and install requirements

    ```sh
    pip install -r requirements.txt
    ```

5. Run backend

    ```sh
    flask run
    ```

### Frontend

1. Install packages

    ```sh
    npm i
    ```

2. Run server in another terminal (make sure to not close backend terminal) 

    ```sh
    npm start
    ```

3. Navigate to [http://localhost:3000](http://localhost:3000)