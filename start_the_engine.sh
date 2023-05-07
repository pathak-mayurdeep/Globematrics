#!/bin/bash

# Run three commands in parallel
streamlit run streamlit_servers/upload_video.py --server.port 57470  --server.headless true --server.maxUploadSize 2048 &
streamlit run streamlit_servers/sync_with_targets.py --server.port 57471  --server.headless true &

# Wait for all commands to finish
wait



