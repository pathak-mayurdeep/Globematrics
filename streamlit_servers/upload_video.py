import streamlit as st

st.maxUploadSize = 2000

st.header('Upload Video')

st.file_uploader('Upload Video')
